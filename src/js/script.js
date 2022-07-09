export let timer=null;
let penalty = 500;
let sec=0;
let mili=0;
let maxloop;
export const easyArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"];

export const hardArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 export const mediumArray=["this is a good name","let see what we can do know","human deserve better world",
 "animals are better than human","lets make earth a better place to leave","India is best country in the world",
"Tiger is the national animal of Indaiia","hankuna mattata, what does this meanns","lets see whatt can be done know",
"Hello Worold, how are youu"];

 export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

export const start = (dispatch) =>{
    dispatch({type:'setStart',payload:true})
    timer = setInterval(()=>{
        mili=mili+5;
        if(mili >= 1000){
            sec+=1;
            mili=mili-1000;
        }
        dispatch({type:'setSec',payload:sec})
        dispatch({type:'setMili',payload:mili})
    },10)
}

export const type = (state,dispatch,)=>{
    if(state.Level !== 'medium'){
        maxloop=19;
    const char= state.Input.charAt(state.Input.length-1);
    if(state.Character === char){
        let x=state.i+1;
        dispatch({type:'setI',payload:x})
        state.Level === 'normal' ? dispatch({type:'setChar',payload:easyArray[getRandomInt(26)]}) : 
        dispatch({type:'setChar',payload:hardArray[getRandomInt(52)]})
    }
    else{
        mili+=penalty;
    }
}
else{
    maxloop=state.Character.length-1;
    const char= state.Input.charAt(state.Input.length-1);
    if(state.Character.charAt(state.i) === char){
        dispatch({type:'setI',payload:state.i+1})
    }
    else{
        mili+=penalty;
    }
}
if(state.i===maxloop){
    mili=0;
    sec=0;
    dispatch({type:'setI',payload:0})
    dispatch({type:'setStart',payload:false})
    dispatch({type:'setInput',payload:''})
    dispatch({type:'setLevel',payload:''})
    clearInterval(timer)
    if(localStorage.getItem('best')){
        if(parseInt(localStorage.getItem('best')) > state.Sec+(state.Mili/1000)){
            dispatch({type:'setChar',payload:'Sucess !!'})
            localStorage.setItem('best',String(state.Sec+(state.Mili/1000))) 
            dispatch({type:'setBest',payload:String(state.Sec+(state.Mili/1000))})
        }
        else{
            dispatch({type:'setChar',payload:'Failed !!'})
        }
    }
    else{
        dispatch({type:'setChar',payload:'Sucess !!'})
        localStorage.setItem('best',String(state.Sec+(state.Mili/1000)))
        dispatch({type:'setBest',payload:String(state.Sec+(state.Mili/1000))})
    }
}
}

export const reset = (dispatch) =>{

    dispatch({type:'setI',payload:0})
    dispatch({type:'setChar',payload:''})
    dispatch({type:'setStart',payload:false})
    dispatch({type:'setInput',payload:''})
    dispatch({type:'setLevel',payload:''})
    dispatch({type:'setSec',payload:0})
    dispatch({type:'setMili',payload:0})
    mili=0;
    sec=0;
    clearInterval(timer)
}

export const medium = (dispatch) =>{
    clearInterval(timer);
    mili=0;
    sec=0;
    dispatch({type:'setChar',payload:mediumArray[getRandomInt(10)]})
    dispatch({type:'setStart',payload:false})
    dispatch({type:'setLevel',payload:'medium'})
    dispatch({type:'setInput',payload:''})
    dispatch({type:'setSec',payload:0})
    dispatch({type:'setMili',payload:0})
}

export const hard = (dispatch) =>{
    clearInterval(timer);
    mili=0;
    sec=0;
    dispatch({type:'setChar',payload:hardArray[getRandomInt(52)]})
    dispatch({type:'setInput',payload:''})
    dispatch({type:'setStart',payload:false})
    dispatch({type:'setLevel',payload:'hard'})
    dispatch({type:'setSec',payload:0})
    dispatch({type:'setMili',payload:0})
}

export const normal = (dispatch) =>{
    clearInterval(timer);
    mili=0;
    sec=0;
    dispatch({type:'setChar',payload:easyArray[getRandomInt(26)]})
    dispatch({type:'setInput',payload:''})
    dispatch({type:'setStart',payload:false})
    dispatch({type:'setLevel',payload:'normal'})
    dispatch({type:'setSec',payload:0})
    dispatch({type:'setMili',payload:0})
}