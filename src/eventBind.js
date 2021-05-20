import React from 'react';

class EventBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello world'
    };
    //this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      message: 'hi parker'
    });
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <h1>
          {' '}
          {this.state.message} {this.props.name}
        </h1>
        <button onClick={this.click.bind(this)}>Click ! </button>
        {/*<button onClick = {() => this.click()}>Click ! </button>*/}
      </div>
    );
  }
}
export default EventBind;
