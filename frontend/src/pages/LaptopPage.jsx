import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

export function LaptopPage(){
    const data = useParams();
    const [laptop,setLaptop] = useState();

    useEffect(() => {
        if(!laptop){
            fetch("http://localhost:3020/laptops/" + data.id)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLaptop(data);
                })
        }
    }, []);

    return(
        <>
            <div>
                {
                    laptop && JSON.stringify(laptop)
                }
            </div>
        </>
    )
}