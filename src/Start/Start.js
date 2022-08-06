import React from 'react'
import StartCss from './Start.module.css'
import { useTicTacContext } from '../TicTacToeContext'

const Start = () => {
     const {startGame} = useTicTacContext();
    return (
    <>
        <div className={StartCss.select}>
            <div className={StartCss.space}>
                <h3>X</h3>
            </div>
             <div className={StartCss.space}>
                <h3>O</h3>
            </div>
        </div>
        <button className={StartCss.btn} onClick={startGame}>Play</button>
      </>
  )
}

export default Start