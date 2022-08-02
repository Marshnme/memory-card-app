import '../App.css'
import '../components/stylesheets/WinScreen.css'

const WinScreen = (props) => {
    return (
        <div className='win-screen-container'>
            <p>YOU WON!</p>
            <button className='button-style' onClick={() =>{props.setCurrentLevel(1)}}>Play Again?</button>
        </div>
        
    )
}

export default WinScreen;