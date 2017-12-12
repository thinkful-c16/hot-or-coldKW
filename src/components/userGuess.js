import React from 'react'
import './userGuess.css'

export default function UserGuess() {
    const guess = 'blahhhhh'
    return (
        <form>
            <input type='text' name='userGuess' id='enterGuess' placeholder='Enter your guess'/>
            <input type='button' id='guessBtn' value='Guess'/>
        </form>
    );
};