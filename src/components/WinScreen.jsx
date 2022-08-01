

const WinScreen = (props) => {
    return (
        <div>
            <p>YOU WON!</p>
            <button onClick={() =>{props.setCurrentLevel(1)}}>Play Again?</button>
        </div>
        
    )
}

export default WinScreen;