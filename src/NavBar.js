import { NavLink } from "react-router-dom"

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: '#2D68C4',
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
                    background: "#F2A900"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/reviewform"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "#F2A900"
                }}
            >
               Leave a review!
            </NavLink>
            <NavLink
                to="/carts"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "#F2A900"
                }}
            >
                View Carts
            </NavLink>
        </div>
    )
}

export default NavBar;