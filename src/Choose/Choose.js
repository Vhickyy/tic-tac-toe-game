import React from 'react'
import { useTicTacContext } from '../TicTacToeContext'
import ChooseCss from './Choose.module.css'

const Choose = () => {
  const {goBack,playerChoice,playerValue,block,...state} = useTicTacContext();
  
 
  return (
        <>
    <h2>Choose</h2>
    <div>
      <div className={ChooseCss.select}>
        <button onClick={(e)=>{
           playerChoice(e.target.textContent)
        }
       } className={ChooseCss.space}>X</button>
        <button onClick={(e)=>{
           playerChoice(e.target.textContent)
        }} className={ChooseCss.space}>O</button>
      </div>
    </div>
    <button className={ChooseCss.btn} onClick={goBack}>Back</button>
    </>
  )
}

export default Choose