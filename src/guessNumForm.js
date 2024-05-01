import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './stats.js'; // Assuming these are your custom styles
import './settings.js'; // Assuming these are your custom styles

// Function to generate a random number within a range
function numGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GuessGame = () => {
    const [targetNumber, setTargetNumber] = useState(numGen(1, 250));
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the user's guess matches the target number
        const guess = parseInt(userGuess);
        if (!isNaN(guess)) {
            if (guess === targetNumber) {
                setFeedback('Congratulations! You guessed the correct number.');
            } else if (guess < targetNumber) {
                setFeedback('Too low! Try a higher number.');
            } else {
                setFeedback('Too high! Try a lower number.');
            }
        } else {
            setFeedback('Please enter a valid number.');
        }
        setUserGuess(''); // Clear the input field after submission
    };

    return (
        <div>
            <p>Guess the number between 1 and 250:</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Guess:
                    <input
                        type="number"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                    />
                </label>
                <button type="submit">Submit Guess</button>
            </form>
            <p>{feedback}</p>
        </div>
    );
};

export default GuessGame;

