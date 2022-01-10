import "./navbar.css";
import { navbarData } from "./navbarData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header id="header" className="header" >
            <nav className="navbar container" >
                <Link to="/" className="nav__logo">Botcity</Link>

                <div className={ sidebar ? `nav__menu show-menu` : `nav__menu`}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a 
                                href="/" 
                                className="nav__link active__link"
                                onClick={ showSidebar }
                            >
                                <i className="fas fa-home nav__icon"></i> Home
                            </a>
                        </li>

                        {navbarData.map(navbar => (
                            <li className="nav__item" key={ navbar.id }>
                                <Link 
                                    to={ navbar.href } 
                                    className="nav__link"
                                    onClick={ showSidebar }
                                >
                                    <i className={ navbar.icon }></i> { navbar.link }
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <i className="fa fa-times nav__close" onClick={ showSidebar }></i>
                </div>

                <div className="nav__btn">
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="fa fa-bars" onClick={ showSidebar }></i>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar
