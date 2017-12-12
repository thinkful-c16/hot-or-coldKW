import React from 'react'
import './rulesreset.css'
;
export default function RulesReset() {
    const about = 'What?';
    const reset = '+ New Game';
    return (
        <nav>
        <ul>
            <li><a className='what' href='#'>{about.toUpperCase()}</a></li>
            <li><a className='about' href='#'>{reset.toUpperCase()}</a></li>
        </ul>
        </nav>
    );
};

