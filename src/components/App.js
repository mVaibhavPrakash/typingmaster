import { useContext, useEffect } from 'react';
import { type } from '../js/script';
import '../css/App.css';
import Button from './Button';
import { Context } from '../js/Context';

function App() {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const oldBest = localStorage.getItem('best') || 0;
    if (state.best !== oldBest) {
      dispatch({ type: 'setBest', payload: oldBest });
    }
    if (state.Start) {
      type(state, dispatch);
    }
  }, [state.best, state.Input, dispatch, state]);
  return (
    <div className="App">
      <h2 id="heading"> Start Typing......</h2>
      <p id="about">
        Typng game to see how fast you type.Timer starts when you click on{' '}
        <span>Start</span>
      </p>
      <div id="screen">{state.Character}</div>
      <p id="timer">
        Time :{state.Sec}.{state.Mili}s
      </p>
      <p id="best">My best time : {state.best}s</p>
      <div id="btn-div">
        <Button id="start-btn" text="Start" />
        <Button id="normal-btn" text="Normal" />
        <Button id="medium-btn" text="Medium" />
        <Button id="hard-btn" text="Hard" />
      </div>
      <input
        id="input"
        value={state.Input}
        onChange={(e) => {
          dispatch({ type: 'setInput', payload: e.target.value });
        }}
        disabled={!state.Start ? true : false}
      />
      <Button id="reset-btn" text="Reset" />
    </div>
  );
}

export default App;
