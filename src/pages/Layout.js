import {Outlet, Link} from "react-router-dom";
import "../styles/nav-styles.css";


 const Layout = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
             <div className="container">
             <Link className="navbar-brand" to="/">UEX</Link>
            
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/services">Service</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/work">Work</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contactUs">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )

 }

 export default Layout;