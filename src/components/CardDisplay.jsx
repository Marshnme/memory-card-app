


const CardDisplay = (props) => {
    let {cards} = props
    return (
        
        cards.map((card) => {
            return (
                <div key={card.uuid}>
                    <p>{card.displayName }</p>
                </div>
                
            )
        })
    )
}

export default CardDisplay