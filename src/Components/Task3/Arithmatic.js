// import React from 'react';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 10,
      show: true
    };
  }

  AdditionItem = () => {
    this.setState({ clicks: this.state.clicks + 5 });
  }
  SubtractionItem = () => {
    this.setState({ clicks: this.state.clicks - 5 });
  }
  MultiplicationItem = () => {
    this.setState({ clicks: this.state.clicks * 5 });
  }
  Click = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.AdditionItem}>Click to AdditionItem by 5</button>
        <button onClick={this.SubtractionItem}>Click to SubtractionItem by 5</button>
        <button onClick={this.MultiplicationItem}>Click to MultiplicationItem by 5</button>
        <button onClick={this.ToggleClick}>
          {/* { this.state.show ? 'Hide number' : 'Show number' } */}
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
