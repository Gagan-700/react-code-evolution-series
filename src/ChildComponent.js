import React from 'react';

export default function Child(props){
  return(
    <div>
    <button onClick = {() => props.greetHandler('from Child')} > Click me </button>
    
    </div>
  )
}