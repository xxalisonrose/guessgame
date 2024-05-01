import React, { useState } from 'react';
import './App.css';
import UserSettings from './settings';
import GuessGame from './guessNumForm';
import { GamesWon, AvgCalc } from './stats';

const GuessApp = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [maxGuesses, setMaxGuesses] = useState(6);
    const [numberRange, setNumberRange] = useState(250);

    const handleStartGame = () => {
        setGameStarted(true);
        console.log('New Game Started!');
    };

    const handleSettingsSubmit = (maxGuesses, numberRange) => {
        setMaxGuesses(maxGuesses);
        setNumberRange(numberRange);
    };

    return (
        <div className="app">
            <h1>Number Guessing Game</h1>
            {!gameStarted ? (
                <div>
                    <UserSettings onSettingsSubmit={handleSettingsSubmit} />
                    <button onClick={handleStartGame}>Start New Game</button>
                </div>
            ) : (
                <div>
                    <GuessGame maxGuesses={maxGuesses} numberRange={numberRange} />
                    <GamesWon />
                    <AvgCalc />
                </div>
            )}
        </div>
    );
};

export default GuessApp;
