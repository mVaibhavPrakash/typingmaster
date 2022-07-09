import { useReducer } from 'react';

const intialValue = {
  Character: '',
  Start: false,
  best: '0',
  Level: 'Select Level',
  i: 0,
  Sec: 0,
  Mili: 0,
  Input: '',
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'setChar':
      return { ...state, Character: action.payload };
    case 'setStart':
      return { ...state, Start: action.payload };
    case 'setBest':
      return { ...state, best: action.payload };
    case 'setLevel':
      return { ...state, Level: action.payload };
    case 'setI':
      return { ...state, i: action.payload };
    case 'setSec':
      return { ...state, Sec: action.payload };
    case 'setMili':
      return { ...state, Mili: action.payload };
    case 'setInput':
      return { ...state, Input: action.payload };
    default:
      break;
  }
};

const Hook = () => {
  const [state, dispatch] = useReducer(Reducer, intialValue);
  return [state,dispatch]
};

export default Hook;