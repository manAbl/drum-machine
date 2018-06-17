import React from 'react';
import Buttons from './buttons/Buttons';

class App extends Component {
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
