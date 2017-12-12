import React from 'react';
import './mainheader.css'

export default function MainHeader() {
    const text = 'HOT or COLD';
    return (
        <header>
            <h1 className='mainH1'>{text}</h1>
        </header>
    )
}