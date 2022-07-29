import './stylesheets/PlayerScore.css'


const PlayerScore = (props) => {
    return <p className="score-counter">Score {props.currentScore} | {props.highScore} High Score</p>
}

export default PlayerScore