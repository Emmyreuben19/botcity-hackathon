import "./home.css";
import { homeData } from "./homeData";
import { Media } from "../";

const Button = ({ classname, icon, id, type, overlay}) => {
    return(
        <button className={ classname }>
            <i className={ icon }></i> { type }
            <div className="overlay">
                <div className="overlay-text">{ overlay }</div>
            </div>
        </button>
    )
}

const Home = () => {
    return (
        <section className="section home">
            <div className="home__container container grid">
                <div className="home__content grid">

                    <div className="home__data">

                        <h1 className="home__title"> { homeData.filter(title => title)[0].title } </h1>
                        <h3 className="home__subtitle"> { homeData.filter(subtitle => subtitle)[0].subtitle } </h3>
                        <p className="home__description"> { homeData.filter(desc => desc)[0].description } </p>
                        
                        { homeData.map(links => (
                            <a href={ links.href }>
                                <Button 
                                    key={ links.id } 
                                    icon={ links.icon } 
                                    classname={ links.classname } 
                                    type={ links.type } 
                                    overlay={ links.overlay } 
                                />
                            </a> 
                        ))}
                    </div>

                    {/* <div className="home__img">
                        <img src={ Cover } alt="img" />
                    </div> */}
                </div>

                <Media />
            </div>
        </section>
    )
}

export {Button, Home}
