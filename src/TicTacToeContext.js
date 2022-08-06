import React,{ createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const TicTacContext = createContext();
const initialState = {
    start:true,
    playing:false,
    choose:false,
    playerValue:'',
    block:[],
    finish:false,
    playerTurn:true,
}

export const TicTacToeProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const startGame = ()=>{
        dispatch({type:'START_GAME'})
    }
    const goBack = ()=>{
        dispatch({type:'GO_BACK'})
    }
    const playerChoice = (id)=>{
        dispatch({type:'PLAYER_CHOICE', payload:id})
    }
    const goBack2 =()=>{
        dispatch({type:'GO_BACK2'})
    }
    const computerTurn = (id)=>{
        dispatch({type:'COMPUTER_TURN',payload:id})
    }
    const playerTurn2 = ()=>{
        dispatch({type:'PLAYER_TURN'})
    }
    const check = (value)=>{
        dispatch({type:'CHECK', payload:value})
    }
    const winner = (value)=>{
        dispatch({type:'DETERMINE_WINNER',payload:value})
    }
    const playAgain =()=>{
        dispatch({type:'PLAY_AGAIN'})
    }
    return (
        <TicTacContext.Provider value={{...state,startGame,goBack,playerChoice,goBack2,computerTurn,winner,playerTurn2,check,playAgain}}>
            {children}
        </TicTacContext.Provider>
    )
}
export const useTicTacContext = ()=>{
    return useContext(TicTacContext)
}