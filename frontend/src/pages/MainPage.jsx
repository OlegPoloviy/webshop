import { NavLink } from "react-router-dom";
import {Products} from "../pages"
import {Header} from "../components/Header.jsx";
import "../styles/mainPage.scss";


export function MainPage() {
    return (
        <>
           <div>
                <Header/>
           </div>
            <div className="list_prod">
                <h2>Check out our new products!</h2>
                <p>If you are looking for more,check our categories</p>
                <Products/>
            </div>
        </>

    );
}
