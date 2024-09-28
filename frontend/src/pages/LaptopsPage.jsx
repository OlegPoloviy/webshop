import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPlaceholderLaptops} from "../store/slices/laptopsSlice.jsx";

export function LaptopsPage() {
    const dispatch = useDispatch();
    const laptops = useSelector(store => store.laptopsReducer);

    useEffect(() => {
        dispatch(getPlaceholderLaptops())
    },[dispatch]);

    return (
        <>
            <div>
                {
                    laptops && laptops.map((el,i) =>(
                        <div key={i}>
                            {el.title} - {el.model}
                            <br/>
                            {el.price}
                        </div>
                    ))
                }
            </div>
        </>
    )
}