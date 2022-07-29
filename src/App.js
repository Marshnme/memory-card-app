import { useState, useEffect } from 'react';
import PlayerScore from './components/PlayerScore';
import Instructions from './components/Instructions';
import CardDisplay from './components/CardDisplay';
import './App.css';

function App() {
	const [instructionsToggle, setInstructionsToggle] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	function toggleInstructions() {
		instructionsToggle
			? setInstructionsToggle(false)
			: setInstructionsToggle(true);
	}

	return (
		<div className="App">
			<header className="header">
				<h1>Remember</h1>
				<PlayerScore
					currentScore={currentScore}
					highScore={highScore}
				></PlayerScore>
			</header>
			<main className="main">
				<div className="instruction-container">
					<button
						className="instructions-button-toggle"
						onClick={toggleInstructions}
					>
						Instructions
					</button>
					{/* set instructions to position absolute */}
					{instructionsToggle ? <Instructions></Instructions> : null}
				</div>

				<CardDisplay></CardDisplay>
			</main>
			<footer className="footer">
				<p>Created by Joshua Holtsclaw for The Odin Project</p>
			</footer>
		</div>
	);
}

export default App;
