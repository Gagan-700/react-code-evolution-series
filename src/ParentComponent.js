import React from 'react';
import Child from './ChildComponent';

export default class ParentComponent extends React.Component {
 greetP(props){
   alert(`hello ${props}`);
   console.log(this.props)
 } 
render(){
  return (
    <Child greetHandler = {this.greetP}/>
  );
}
}