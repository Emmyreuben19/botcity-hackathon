import "./footer.css";
import { Link } from "react-router-dom";
import { footerSocial, footerLinks } from "./footerData";
import { useState, useEffect  } from "react";

const Footer = () => {

    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear());
    useEffect(() => {
        getYear();
    },[]) 

    return (
        <footer className="footer">
            <div className="footer__container container">

                <div>
                    <h1 className="footer__title">Botcity</h1>
                    <span className="footer__subtitle">Hackathon for everyone</span>
                </div>

                <div className="footer__links">
                    { footerLinks.map(item => (
                        <Link
                            key={ item.id }
                            to={ item.href }
                            className={ item.classname }
                        > 
                        { item.link } </Link>
                    ))}
                </div>

                <div className="footer__social">
                    { footerSocial.map((item) => (
                        <Link to={ item.href } key={ item.id }>
                            <i className={ item.icon }></i>
                        </Link>
                    ))}
                </div>
            </div>

            <p className="footer__copywrite">
                &copy; { date } Botcity Hackathon, All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
