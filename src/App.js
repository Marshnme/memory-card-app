import { useState, useEffect } from 'react';
import PlayerScore from './components/PlayerScore';
import Instructions from './components/Instructions';
import CardDisplay from './components/CardDisplay';
import WinScreen from './components/WinScreen';
import './App.css';

function App() {
	const [instructionsToggle, setInstructionsToggle] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [allGameCards, setAllGameCards] = useState([]);
	const [currentLevelGameCards, setCurrentLevelGameCards] = useState([]);
	const [pickedCards, setPickedCards] = useState([]);

	useEffect(() => {
		getGameCards();
	}, []);

	useEffect(() => {
		setCurrentLevelGameCards([]);
		setPickedCards([]);
		setLevelGameCards(currentLevel);
	}, [setCurrentLevel, currentLevel]);

	useEffect(() => {
		checkWin();
	}, [pickedCards]);

	const getGameCards = async () => {
		const res = await fetch(
			'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
		);
		const data = await res.json();
		console.log(data.data);
		let newOrder = [...data.data];
		shuffleCardOrder(newOrder);
		setAllGameCards(newOrder);
		setAllGameCards(newOrder);
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

	function shuffleCardOrder(newOrder) {
		newOrder.reverse().forEach((item, index) => {
			const j = Math.floor(Math.random() * (index + 1));
			[newOrder[index], newOrder[j]] = [newOrder[j], newOrder[index]];
		});

		return newOrder;
	}

	function pickCard(e) {
		let cardID = e.target.classList[0];

		let newOrder = [...currentLevelGameCards];

		if (pickedCards.includes(cardID)) {
			if (currentScore > highScore) {
				setHighScore(currentScore);
			}
			if (currentLevel === 1) {
				setPickedCards([]);
				setCurrentScore(0);
				shuffleCardOrder(newOrder);
				setCurrentLevelGameCards(newOrder);
			}
			setCurrentScore(0);
			setCurrentLevel(1);
			return;
		} else {
			setCurrentScore(currentScore + 1);
			setPickedCards([...pickedCards, e.target.classList[0]]);
		}

		// shuffleCardOrder(newOrder);
		setCurrentLevelGameCards(newOrder);
	}

	function checkWin() {
		if (currentLevelGameCards.length === 0) {
			return;
		}

		if (pickedCards.length === currentLevelGameCards.length) {
			nextLevel();
		}
	}

	function nextLevel() {
		if (currentLevel === 5) {
			return;
		}
		setCurrentLevel(currentLevel + 1);
		// try to randomize card order here
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
				{currentLevel === 5 &&
				pickedCards.length === currentLevelGameCards.length ? (
					<WinScreen setCurrentLevel={setCurrentLevel}></WinScreen>
				) : (
					<>
						<div className="instruction-container">
							<button
								className="instructions-button-toggle button-style"
								onClick={toggleInstructions}
							>
								Instructions
							</button>
							{/* set instructions to position absolute */}
							{instructionsToggle ? (
								<Instructions></Instructions>
							) : null}
						</div>
						<p className="level-counter">Level - {currentLevel}</p>
						<div className="card-display-holder">
							<CardDisplay
								cards={currentLevelGameCards}
								pickCard={pickCard}
							></CardDisplay>
						</div>
						<div className="level-buttons">
							<button
								className="button-style"
								onClick={previousLevel}
							>
								Previous Level
							</button>
							<button
								className="button-style"
								onClick={nextLevel}
							>
								Next Level
							</button>
						</div>
					</>
				)}
			</main>
			<footer className="footer">
				<p>Created by Joshua Holtsclaw for The Odin Project</p>
			</footer>
		</div>
	);
}

export default App;
