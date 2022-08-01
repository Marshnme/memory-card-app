import '../App'

const WinScreen = (props) => {
    return (
        <div>
            <p>YOU WON!</p>
            <button className='button-style' onClick={() =>{props.setCurrentLevel(1)}}>Play Again?</button>
        </div>
        
    )
}

export default WinScreen;