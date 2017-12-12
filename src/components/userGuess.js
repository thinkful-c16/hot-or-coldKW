import React from 'react'
import './userGuess.css'

export default function UserGuess() {
    const guess = 'blahhhhh'
    return (
        <form>
            <input type='text' name='userGuess' className='userGuess' placeholder='Enter your guess'/>
            <input type='submit' value='Guess'/>
        </form>
    );
};