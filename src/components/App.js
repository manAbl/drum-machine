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

  onKeyPress = (e) => {

    if(e.key == 'W') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'A') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'S') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'D') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'Space') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowUp') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowDown') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowLeft') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowRight') {
      alert(' Presionaste ' + e.key);
    }

    return;
  }

  render() {
    return (
      <div className="app-wrapper">
        <Buttons onClick={this.handleClick} onKeyPress={this.onKeyPress} />
      </div>
    );
  }
};

export default App;
