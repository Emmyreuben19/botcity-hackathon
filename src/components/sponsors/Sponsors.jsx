import { SponsorItem, SponsorUS } from "./SponsorItem";
import { sponsorInfo, sponsorLogos } from "./sponsorsData";
import "./sponsors.css";

const Sponsors = () => {
    return (
        <section className="sponsor section" id="sponsor">
            <h2 className="section__title">Sponsors & Partners</h2>
            <span className="section__subtitle">Check out our sponsors and apply if Interested</span>

            { sponsorInfo.map(SponsorUS) }
            <div className="sponsor__container container grid">
                { sponsorLogos.map(SponsorItem) }
            </div>
        </section>
    )
}

export default Sponsors
