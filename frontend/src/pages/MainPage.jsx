import { NavLink } from "react-router-dom";
import "../styles/mainPage.scss";

export function MainPage() {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <div className="phones">
                        <NavLink
                            to="/products"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            To smartphones
                        </NavLink>
                    </div>
                    <div className={"laptop"}>
                        <NavLink
                            to="/laptops"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            To laptops
                        </NavLink>
                    </div>
                    <div className={"electronics"}>
                        <NavLink
                            to="/electronics"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                            To home electronics
                        </NavLink>
                    </div>
                </div>
            </div>
        </>

    );
}
