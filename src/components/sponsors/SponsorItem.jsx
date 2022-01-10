import {Button} from "../";

const Sponsor = ({ src }) => {
    return(
        <div className="sponsor__content">
            <img src={ src } alt="botcity hack" />
        </div>
    )
}

const SponsorUS = ({ title, email }) => {
    return (
        <div className="sponsor__support">
            <h3 className="sponsor__title"> { title } </h3>
            <a href={ email }>
                <Button 
                    classname="button button--flex sponsor__link"
                    type="Sponsor us" 
                    overlay="Send a mail" 
                />
            </a> 
        </div>
    )
}

const SponsorItem = (props) => {
    return(
        <>
            { props.map(sponsor => (
                <Sponsor key={ sponsor.id } src={ sponsor.src } />
            ))}
        </>
    )
}

export { Sponsor, SponsorUS, SponsorItem}
