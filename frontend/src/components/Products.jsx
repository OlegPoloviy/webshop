import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPlaceholderProducts} from "../store/slices/productsSlice.jsx";

export function Products(){
    const dispatch = useDispatch();
    const products = useSelector(store => store);

    useEffect(() => {
        dispatch(getPlaceholderProducts())
    }, [dispatch]);

    return(
        <>
            <div>
                {
                    products && products.map((el,id) => (
                        <div key={id}>
                            <b>{el.id}</b> - {el.title},{el.type}
                            <br/>
                            {el.price}
                        </div>
                    ))
                }
            </div>
        </>
    )
}