import React from 'react';

// total games won
export const GamesWon = ({ totalGamesWon }) => {
    return <p>Total Games Won: {totalGamesWon}</p>;
};

// average number of guesses
export const AvgCalc = ({ numbers }) => {
    const calculateAverage = (numbers) => {
        if (numbers.length === 0) {
            return 0; // Return 0 if array is empty to avoid division by zero
        }
        const sum = numbers.reduce((total, num) => total + num, 0);
        return sum / numbers.length;
    };

    const averageGuesses = calculateAverage(numbers);

    return (
        <div>
            <p>Average Number of Guesses Needed: {averageGuesses}</p>
        </div>
    );
};
