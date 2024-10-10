import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPlaceholderProducts} from "../store/slices/productsSlice.jsx";
import {useNavigate} from "react-router-dom";


export function Products(){
    const dispatch = useDispatch();
    const products = useSelector(store => store.productsReducer);

    useEffect(() => {
        dispatch(getPlaceholderProducts())
    }, [dispatch]);

    const navigation = useNavigate();
    function navigateProduct(product){
        navigation('/products/' + product.id);
    }

    console.log(products);

    return(
        <>
            <div>
                {
                    products && products.map((el,id) => (
                        <div key={id} style={{border:" 1px solid red"}}>
                            <img src={el.path_to_img} alt="" width={'250'}/>
                            <br/>
                            <b>{el.id}</b> - {el.title},{el.type}
                            <br/>
                            {el.price}
                            <br/>
                            <button onClick={() => navigateProduct(el)}>See more about {el.title}</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}