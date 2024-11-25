import "../styles/navbar.scss";
import {Dropdown} from "./Dropdown.jsx";
import UserPic from "../media/Profile.png";
import Logo from "../media/laptop-computer.png"
import {NavLink} from "react-router-dom";

export function Navbar(){

    return(
        <>
            <div className="nav-container">
                <div className={"nav-container-logo"}>
                    <NavLink to={"/"} style={{textDecoration: "none",margin: "0", display:"flex"}}>
                        <img src={Logo} alt=""/>
                        <p>Tech 4 you</p>
                    </NavLink>

                </div>
                <ul className={"nav-container-list"}>
                    <li>
                       <Dropdown/>
                    </li>
                    <li><a href="">About project</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                <div className={"nav-container-picture"}>
                    <NavLink to={"/register"}>
                        <img src={UserPic} alt="UserPicture"/>
                    </NavLink>
                </div>
            </div>
        </>
    )
}