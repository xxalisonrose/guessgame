// Settings
// # of guesses allowed
// range of numbers
import React, { useState } from 'react';

const UserSettings = ({ onSettingsSubmit }) => {
    const [maxGuesses, setMaxGuesses] = useState(6);
    const [numberRange, setNumberRange] = useState(250);

    const handleSubmit = () => {
        onSettingsSubmit(maxGuesses, numberRange);
    };

    return (
        <div>
            <label>
                Number of Guesses Allowed:
                <input
                    type="number"
                    value={maxGuesses}
                    onChange={(e) => setMaxGuesses(parseInt(e.target.value))}
                />
            </label>
            <br />
            <label>
                Number Range to Guess (1 - 250):
                <input
                    type="number"
                    value={numberRange}
                    onChange={(e) => setNumberRange(parseInt(e.target.value))}
                />
            </label>
            <br />
            <button onClick={handleSubmit}>Save Settings</button>
        </div>
    );
};

export default UserSettings;


