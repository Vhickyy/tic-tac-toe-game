import React, { useEffect } from 'react'
import { useTicTacContext } from '../TicTacToeContext'
import TicCss from './TicTacToe.module.css'

const TicTacToe = () => {
    const {block,playerValue,goBack2,getBlock,finish,playerTurn,computerTurn,winner,replay,newBlock,playerTurnChange, playingGame,playerTurn2,check,playAgain} = useTicTacContext();
    // console.log(state);
    let computerValue;
    if(playerValue === 'X'){
        computerValue = 'O'
    } else computerValue = 'X'

     let final = block.find(item => item.tick)
        let finals = ''
        if(final){
        if(final.value === playerValue && final.value == computerValue){
            finals = 'Tie game'
        }else if(final.value === playerValue){
        finals = `Player Won ${playerValue}`
      }else 
       finals = `Computer Won ${computerValue}`
    }
    useEffect(()=>{
        let timer =setTimeout(()=>{
            computerTurn(computerValue)
        },500)
    },[playerTurn])

    useEffect(()=>{
        winner(computerValue);
    },[block])

    const player = (id)=>{
        if(!finish){
             if(playerTurn){
             let newBlock= block.map(item=>{
                if(item.id === id && item.value === ''){
                    playerTurn2()
                    return {...item,value:playerValue}
                }else{
                    return item;
                }
        })
        check(newBlock)
        }else{
            return;
        }
        }}
          
    //     let final = block.find(item => item.tick)
    //     let finals = ''
    //     if(final){
    //     if(final.value === playerValue && final.value == computerValue){
    //         finals = 'Tie game'
    //     }else if(final.value === playerValue){
    //     finals = `Player Won ${playerValue}`
    //   }else 
    //    finals = `Computer Won ${computerValue}`
    // }
  return (
     <>
    <div className={TicCss.flex}>
        <h5>Player:{playerValue}</h5>
        <h5>Computer:{computerValue}</h5>
    </div>
    {finish && <h3>{finals || 'No Winner'} </h3>}
   {!finish && <h3>{playerTurn ? 'player turn' : 'computer turn'}</h3>}
   <div className={TicCss.container}>
   {block && block.map(item =>{
    return (
        <div 
        className= {` ${TicCss.cell} ${item.tick ? TicCss.green : null}`}
        key={item.id} 
        onClick={()=> player(item.id)}>{item.value}</div>
    )
   })}
   </div>
   <button className={TicCss.btn} onClick={goBack2}>Back</button>
   {finish && <button className={TicCss.btn} onClick={()=>playAgain()}>Play Again</button>}
   </>
  )
}

export default TicTacToe;