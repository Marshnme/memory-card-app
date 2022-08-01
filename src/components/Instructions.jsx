import './stylesheets/Instructions.css'


const Instructions = () => {
    return(
        <ol className="list">
            <li>Pick a card</li>
            <li>Don't pick any card you have previously picked</li>
            <li>Reach level 5 to Win!</li>
        </ol>
    )
}

export default Instructions