import React from 'react'
import RulesReset from './rulesreset'
import GuessTracker from './guesstracker'
import TopBoard from './topboard'
import UserGuess from './userGuess'
import MainHeader from './mainheader'
// import '/.mainboard.css'
//hot or cold text

export default function MainBoard() {
    const text = 'HOT or COLD'
   return (
       <main>
           <RulesReset />
           <MainHeader />
           <TopBoard />
           <UserGuess />
           <GuessTracker />
       </main>
   )
}