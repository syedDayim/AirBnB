import logo from "../images/logo.png"

export default function Navbar(){
    return(
        <div className="navbar">
            <img
                className="nav-logo"
                src={logo}
            ></img>
        </div>
    )
}