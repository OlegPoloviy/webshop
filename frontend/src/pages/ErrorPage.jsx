import {NavLink} from "react-router-dom";

export function ErrorPage(){

    return(
        <>
            <div>
                <h2>This is error, return to home page</h2>
                <NavLink to={"/"}>
                    <button>Return</button>
                </NavLink>
            </div>
        </>
    )
}