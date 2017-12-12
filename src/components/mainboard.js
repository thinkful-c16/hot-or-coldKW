import React from 'react'
import NewGame from './newgame'
import GameRules from './gamerules'
import GuessTracker from './guesstracker'
import TopBoard from './topboard'
import UserGuess from './userGuess'
//hot or cold text

export default function MainBoard() {
    const text = 'HOT or COLD'
   return (
       <main>
           <NewGame />
           <GameRules />
           {text}
           <TopBoard />
           <UserGuess />
       </main>
   )
}