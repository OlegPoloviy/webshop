import "../styles/header.scss";
import Laptop from "../media/laptop-computer.png"

export function Header(){
    return(
        <>
            <div className={'main_container'}>
                <div className="main_container_title">
                    <img src={Laptop} alt=""/>
                    <h2>The best that you deserve</h2>
                    <p>At our website you can browse and buy the latest models of smartphones,laptops and more!</p>
                    <button>Find your dream now</button>
                </div>
            </div>
        </>
    )
}