
import './stylesheets/CardDisplay.css'

const CardDisplay = (props) => {
    let {cards} = props
    return (
        cards.map((card) => {
            return (
                <div key={card.uuid} className="agent-card">
                    <img src={card.displayIcon} alt='Agent Icon' className='agent-pic'></img>
                    <p>{card.displayName }</p>
                </div>
            )
        })
    )
}

export default CardDisplay