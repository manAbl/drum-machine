import React, { Component } from 'react';
import Buttons from './buttons/Buttons';
import '../styles/app-styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      faseOne: true,
    };
  }

  handleClick = () => {

  }

  render() {
    return (
      <div className="app-wrapper">
        <Buttons onClick={this.handleClick} />
      </div>
    );
  }
};

export default App;
