
const PrizeItem = (props) => {
    return (
        <div key={ props.id } className="prize__content">
            { props.icon }
            <h2 className="prize__title">{ props.type }</h2>
            <p className="prize__description">{ props.content } </p>   
        </div>
    )
}


export default PrizeItem
