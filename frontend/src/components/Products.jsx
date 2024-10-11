import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPlaceholderProducts} from "../store/slices/productsSlice.jsx";
import {useNavigate} from "react-router-dom";
import "../styles/products.scss"

export function Products(){
    const dispatch = useDispatch();
    const products = useSelector(store => store.productsReducer);

    useEffect(() => {
        dispatch(getPlaceholderProducts());
    }, [dispatch]);

    const navigation = useNavigate();
    function navigateProduct(product){
        navigation('/products/' + product.id);
    }

    return(
        <div className="products_grid">
            {
                products && products.map((product, id) => (
                    <div key={id} className="product_card">
                        <img src={product.path_to_img} alt={product.title} className="product_image"/>
                        <h3 className="product_title">{product.title}</h3>
                        <p className="product_price">{product.price}$</p>
                        <button onClick={() => navigateProduct(product)}>Read more</button>
                    </div>
                ))
            }
        </div>
    );
}
