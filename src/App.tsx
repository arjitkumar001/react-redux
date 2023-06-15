import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Actions/Action'


const handleChange = (e: React.ChangeEvent<HTMLInputElement>): string => {
  return e.target.value;
};
function App(): JSX.Element {
  const myState = useSelector((state: { changeNumber: number }) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className='App'>
     <div className='form'>
     <h1>Incriment/Decriment</h1>
     <p>Counter</p>
     <u>Using React-redux</u>
     <div className='form-sec'>
     <button onClick={() => dispatch(decNumber())}>-</button>
      <input type="text" name="" id="" value={myState} onChange={handleChange} />
      <button onClick={() => dispatch(incNumber())}>+</button>
     </div>
     </div>

    </div>
  )
}

export default App;
