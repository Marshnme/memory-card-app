import { useState, useEffect } from 'react';
import PlayerScore from './components/PlayerScore';
import Instructions from './components/Instructions';
import CardDisplay from './components/CardDisplay';
import './App.css';

function App() {
	const [instructionsToggle, setInstructionsToggle] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [allGameCards, setAllGameCards] = useState([]);
	const [currentLevelGameCards, setCurrentLevelGameCards] = useState([]);

	useEffect(() => {
		getGameCards();
	}, []);

	useEffect(() => {
		console.log('HELLLO');
		console.log(currentLevel);
		setCurrentLevelGameCards([]);
		setLevelGameCards(currentLevel);
	}, [setCurrentLevel, currentLevel]);

	const getGameCards = async () => {
		const res = await fetch(
			'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
		);
		const data = await res.json();
		console.log(data.data);
		setAllGameCards(data.data);
		setCurrentLevel(1);
	};

	function setLevelGameCards(level) {
		for (let i = 0; i < allGameCards.length; i++) {
			if (level === 1) {
				if (i < 3) {
					setCurrentLevelGameCards((prevState) => [
						...prevState,
						allGameCards[i],
					]);
				}
			} else if (level === 2) {
				if (i < 5) {
					setCurrentLevelGameCards((prevState) => [
						...prevState,
						allGameCards[i],
					]);
				}
			} else if (level === 3) {
				if (i < 10) {
					setCurrentLevelGameCards((prevState) => [
						...prevState,
						allGameCards[i],
					]);
				}
			} else if (level === 4) {
				if (i < 15) {
					setCurrentLevelGameCards((prevState) => [
						...prevState,
						allGameCards[i],
					]);
				}
			} else if (level === 5) {
				if (i < 19) {
					setCurrentLevelGameCards((prevState) => [
						...prevState,
						allGameCards[i],
					]);
				}
			}
		}
	}

	function toggleInstructions() {
		instructionsToggle
			? setInstructionsToggle(false)
			: setInstructionsToggle(true);
	}

	function nextLevel() {
		if (currentLevel === 5) {
			return;
		}
		setCurrentLevel(currentLevel + 1);
	}
	function previousLevel() {
		if (currentLevel === 1) {
			return;
		}
		setCurrentLevel(currentLevel - 1);
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
				<p>Level - {currentLevel}</p>
				<div className="card-display-holder">
					<CardDisplay cards={currentLevelGameCards}></CardDisplay>
				</div>
				<div className="level-buttons">
					<button onClick={previousLevel}>previous level</button>
					<button onClick={nextLevel}>next level</button>
				</div>
			</main>
			<footer className="footer">
				<p>Created by Joshua Holtsclaw for The Odin Project</p>
			</footer>
		</div>
	);
}

export default App;
