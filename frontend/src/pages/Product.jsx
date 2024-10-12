import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/product.scss";

export function Product() {
    const data = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [currentImage, setImage] = useState('');

    useEffect(() => {
        if (!product) {
            fetch("http://localhost:3020/shop/" + data.id)
                .then(res => res.json())
                .then(product => {
                    setProduct(product);

                    const productImages = [
                        product[0].path_to_img,
                        product[0].smarphones_about.image2,
                        product[0].smarphones_about.image3,
                        product[0].smarphones_about.image4
                    ].filter(image => image);
                    console.log(product)
                    setImages(productImages);
                    setImage(product[0].path_to_img);
                })
                .catch(error => {
                    console.error("Error fetching product data:", error);
                });
        }
    }, [data.id, product]);

    return (
        <div className="product-page">
            {product ? (
                <>
                    <div className="product-main">
                        <div className="product-image">
                            <img src={currentImage} alt={product[0].title} />
                            <div className="image-thumbnails">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => setImage(image)}
                                        className={currentImage === image ? 'active-thumbnail' : ''}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="product-info">
                            <h2 className="product-title">{product[0].title}</h2>
                            <p className="product-price">${product[0].price}</p>
                            <div className="product-options">
                                <h3>Chose your version:</h3>
                                <div className="option">
                                    <span>Version:</span>
                                    <button className="btn">Global</button>
                                    <button className="btn">e-Sim</button>
                                </div>
                                <div className="option">
                                    <span>Memory:</span>
                                    <button className="btn">128GB</button>
                                    <button className="btn">256GB</button>
                                    <button className="btn">512GB</button>
                                </div>
                                <div className="option">
                                    <span>Color:</span>
                                    <button className="btn color-btn red"></button>
                                    <button className="btn color-btn blue"></button>
                                    <button className="btn color-btn gray"></button>
                                    <button className="btn color-btn white"></button>
                                    <button className="btn color-btn gold"></button>
                                </div>
                            </div>
                            <ul className="product-specs">
                                <li>Display: {product[0].smarphones_about.display}</li>
                                <li>Camera: {product[0].smarphones_about.battery}</li>
                                <li>Battery: {product[0].smarphones_about.camera}</li>
                                <li>Processor: {product[0].smarphones_about.processor}</li>
                                <li>RAM: {product[0].smarphones_about.ram}</li>
                                <li>Size: {product[0].smarphones_about.size}</li>
                                <li>Memory: {product[0].smarphones_about.memory}</li>
                            </ul>
                            <div className="purchase-options">
                                <button className="btn buy-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading product...</p>
            )}
        </div>
    );
}
