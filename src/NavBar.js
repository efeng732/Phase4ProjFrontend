import { NavLink } from "react-router-dom"

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color: "white",
}

function NavBar ({user}) {

 
    return (
        <div className="navbar">
            
            <NavLink
                to="/gamelist"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/reviewform"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black"
                }}
            >
               Leave a review!
            </NavLink>
            <NavLink
                to="/carts"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black"
                }}
            >
                View Carts
            </NavLink>
        </div>
    )
}

export default NavBar;