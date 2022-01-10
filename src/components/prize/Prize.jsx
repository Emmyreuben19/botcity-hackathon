import { prizeData, PrizeInfo } from "./prizeData";
import PrizeItem from "./PrizeItem";
import "./prize.css";

const PrizeGroup = (props) => {
    return(
        <div>
            { props.map(prize => (
                <PrizeItem 
                    key={ prize.key }
                    icon={ prize.icon } 
                    type={ prize.type } 
                    content={ prize.content } 
                />
            ))}
        </div>
    )
}

const Prize = () => {
    return (
        <section className="prize section" id="prize">
            <h2 className="section__title">{ prizeData.filter(prize => prize)[0].title }</h2>
            <span className="section__subtitle">{ prizeData.filter(prize => prize)[0].subtitle }</span>

            <div className="prize__container container grid">
                { PrizeInfo.map(PrizeGroup) }             
            </div>
        </section>
    )
}

export default Prize
