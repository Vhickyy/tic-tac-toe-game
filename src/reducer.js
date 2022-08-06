const reducer=(state,action)=>{
    if(action.type === 'START_GAME'){
        return {...state,start:false,choose:true}
    }
    if (action.type == 'GO_BACK'){
        return {...state,start:true,choose:false}
    }
    if(action.type == 'PLAYER_CHOICE'){
        const newBlock=()=>{
        let arr = []
        let id=0
        for (let i=0;i<9;i++){
            id++
            let item = {id,value:'',tick:false}
            arr.push(item)
        }
        return arr;
       }
        return {...state,playerValue: action.payload,choose:false,playing:true,block:newBlock()}
    }
    if(action.type === 'GO_BACK2'){
        return {...state,playing:false,choose:true,playerValue:'',block:[],playerTurn:true,finish:false}
    }
    if(action.type === 'CHECK'){
        return {...state, block:action.payload}
    }
    if(action.type === 'PLAYER_TURN'){
        return {...state, playerTurn:false}
    }

    if(action.type === 'COMPUTER_TURN'){
        if(!state.playerTurn && !state.finish){
        const computerChoicefromBlock=()=>{
        let filter = state.block.filter(item=>{
           return item.value === ''
        })
        let num =Math.floor( Math.random()*filter.length);
        if(filter.length){
        const anotherBlock = state.block.map(item=>{
        return item.id === filter[num].id ? {...item,value:action.payload} : item
        })
        return anotherBlock;
        } }
        return {...state,block:computerChoicefromBlock(),playerTurn:true}
        }
    }
    if(action.type === 'DETERMINE_WINNER'){
        let p = state.playerValue;
        let co = action.payload;
            let arr = {...state}
        let newBlock = [...state.block];
        let a = newBlock[0];
        let b = newBlock[1];
        let c = newBlock[2];
        let d = newBlock[3];
        let e = newBlock[4];
        let f = newBlock[5];
        let g = newBlock[6];
        let h = newBlock[7];
        let i = newBlock[8];
        if((a.value===p && b.value===p && c.value===p) || (a.value===co && b.value===co && c.value===co)){
            a.tick = true
            b.tick = true
            c.tick = true
         return {...state,finish:true,playerTurn:false}
        }  else if((a.value===p && d.value===p && g.value===p)|| (a.value===co && d.value===co && g.value===co)){
            a.tick = true
            d.tick = true
            g.tick = true
        return {...state,finish:true}
        }else if((a.value===p && e.value===p && i.value===p)||(a.value===co && e.value===co && i.value===co)){
            a.tick = true
            e.tick = true
            i.tick = true
            return {...state,finish:true,}
        }else if((e.value===p && b.value===p && h.value===p)||(e.value===co && b.value===co && h.value===co)){
            b.tick = true
            e.tick = true
            h.tick = true
            return {...state,finish:true,}
        }else if((c.value===p && e.value===p && g.value===p) || (c.value===co && e.value===co && g.value===co)){
            c.tick = true
            e.tick = true
            g.tick = true
            return {...state,finish:true}
        }else if((d.value===p && e.value===p && f.value===p)||(d.value===co && e.value===co && f.value===co)){
            d.tick = true
            e.tick = true
            f.tick = true
            return {...state,finish:true,}
        }else if((c.value===p && f.value===p && i.value===p)||(c.value===co && f.value===co && i.value===co)){
            c.tick = true
            f.tick = true
            i.tick = true
            return {...state,finish:true,}
        }else if((g.value===p && h.value===p && i.value===p)|| (g.value===co && h.value===co && i.value===co)){
            g.tick = true
            h.tick = true
            i.tick = true
            return {...state,finish:true,}
        }else{
            let tick = state.block.find(item => !item.tick)
        let value = state.block.every(item=> item.value!== '')
        if(tick && value){
            return {...state,finish:true,}
        } }
    }
     if(action.type === 'PLAY_AGAIN'){
         const newBlock=()=>{
        let arr = []
        let id=0
        for (let i=0;i<9;i++){
            id++
            let item = {id,value:'',tick:false}
            arr.push(item)
        }
        return arr;
       }
        return {...state, finish:false,block:newBlock(),playerTurn:true}
    }
    return state;
}
export default reducer;