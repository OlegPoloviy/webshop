import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";

export function Product(){
    const data = useParams();
    const [product,setProduct] = useState();

    useEffect(() => {
        if(!product){
            fetch("http://localhost:3020/shop/" + data.id)
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(product => setProduct(product));
        }
    })

    return(
        <>
            <div>
                <h2>Selected product</h2>
                {
                    product && JSON.stringify(product)
                }
            </div>
        </>
    )
}