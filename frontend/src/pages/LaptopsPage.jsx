import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPlaceholderLaptops} from "../store/slices/laptopsSlice.jsx";
import {useNavigate} from "react-router-dom";

export function LaptopsPage() {
    const dispatch = useDispatch();
    const laptops = useSelector(store => store.laptopsReducer);
    const navigation = useNavigate();

    useEffect(() => {
        dispatch(getPlaceholderLaptops())
    },[dispatch]);

    function navigateToLaptop(data){
        navigation("/laptops/" + data.id);
    }

    return (
        <>
            <div>
                {
                    laptops && laptops.map((el,i) =>(
                        <div key={i}>
                            {el.title} - {el.model}
                            <br/>
                            {el.price}
                            <br/>
                            <button onClick={() => navigateToLaptop(el)}>See more of {el.title}</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}