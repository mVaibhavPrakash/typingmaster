import React, { useContext } from 'react'
import { Context } from '../js/Context'
import { normal,reset,medium,hard, start } from '../js/script'
import '../css/button.css'

const Button = ({id,text}) => {
    const [state,dispatch] = useContext(Context)
  return (
    <button id={id} onClick={e=> text === 'Normal' ? normal(dispatch): text === 'Medium' ? 
    medium(dispatch): text === 'Hard' ? hard(dispatch) : text==='Reset' ? reset(dispatch):start(dispatch)} 
    disabled={text==='Start' ? 
    state.Level ? false : true : false}>{text}</button>
  )
}

export default Button