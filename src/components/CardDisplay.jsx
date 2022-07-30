
import './stylesheets/CardDisplay.css'

const CardDisplay = (props) => {
    let { cards,pickCard } = props
    


    return (
        cards.map((card) => {
            return (
                <div key={card.uuid} className={`${card.uuid} agent-card` }onClick={pickCard}>
                    <img src={card.displayIcon} alt='Agent Icon' className={`${card.uuid} agent-pic`}></img>
                    <p className={card.uuid}>{card.displayName }</p>
                </div>
            )
        })
    )
}

export default CardDisplay