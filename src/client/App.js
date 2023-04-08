import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numDie: 6, curRoll: undefined };
    this.url = 'http://localhost:3000/api/';
    this.rollDice = this.rollDice.bind(this);
  }

  async rollDice() {
    console.log('url: ', this.url + 'roll/' + this.state.numDie);
    try {
      const res = await fetch(this.url + 'roll/' + this.state.numDie);
      const dieRoll = await res.json();
      this.setState({ ...this.state, curRoll: dieRoll });
    } catch (err) {
      console.log('ERROR: ', err);
    }
  }

  render() {
    console.log(this.state.curRoll);
    return (
      <div>
        <div>
          {!this.state.curRoll
            ? 'Please Roll'
            : this.state.curRoll.map((num, i) => (
                <button key={`${i} ${num}`}>{num}</button>
              ))}
        </div>
        <button className="roll-button" onClick={this.rollDice}>
          Roll
        </button>
      </div>
    );
  }
}

export default App;
