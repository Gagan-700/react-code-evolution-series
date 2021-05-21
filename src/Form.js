import React from 'react';

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      age: '',
      Tech: ''
    }
    this.handler = this.handler.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  handler(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit(){
    alert(JSON.stringify(this.state));
  }

  render(){
    return (
      <div>
      <h2>React Form </h2>
      <form onSubmit = {this.onSubmit}>
      <div>
      <label> Name </label>
      <input type = 'text' value = {this.state.name} onChange = {this.handler} name = "name"  />
      </div>
      <div>
      <label> Age </label>
      <input type = 'number' value = {this.state.age} onChange = {this.handler} name = "age"  />
      </div>
      <div>
      <label> Technology </label>
      <select onChange = {this.handler} name = "Tech" value = {this.state.Tech}>
      <option value = "Angular" >Angular</option>
      <option value = "Veu" >Veu</option>
      <option value = "React" >React</option>
      </select>
      </div>
      <button  >Submit</button>
      </form>
      </div>
    )
  }
}
export default Form