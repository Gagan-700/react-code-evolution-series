import React,{useState} from 'react';

export default function Counter(){
  const[counter,setCounter] = useState(0)

  function Increment(){
    setCounter(counter + 1);
  }
  function Decrement(){
    setCounter(counter - 1);
  }
  return (
    <div>
      counter {counter}
      <br></br>
      <button onClick = {Increment} >Increment</button>
      <button onClick = {Decrement} >Decrement</button>
    </div>
  )
}

