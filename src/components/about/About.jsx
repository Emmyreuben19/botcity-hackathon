import "./about.css";
import { Cover } from "..";
import { aboutData } from "./aboutData";

const About = () => {
    return (
        <section className="about section" id="about">
            <h1 className="section__title"> { aboutData.filter(about => about)[0].heading } </h1>
            <span className="section__subtitle"> { aboutData.filter(about => about)[0].subHeading } </span>

            <div className="about__container container grid">
                <img src={ Cover } alt="about-img" className="about__img" />

                <div className="about__data">
                    <h2 className="about__title">{ aboutData.filter(about => about)[0].titleQuestion}</h2>
                    <p className="about__description"> 
                        { aboutData.filter(about => about)[0].description } 
                    </p>
                    <div class="about__buttons">
                        <a href="assets/botcity-hackathon.pdf" class="button button--flex" download="">
                            Read more <i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

