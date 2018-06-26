const projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound = e => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <div id={this.props.clipId}
        onClick={this.playSound}
        className="drum-pad"
        style={this.state.padStyle} >
          <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
          {this.props.keyTrigger}
      </div>
    )
  }
}

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    this.props.power ?
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clipId={padBankArr[i].id}
            clip={padBankArr[i].url}
            keyTrigger={padBankArr[i].keyTrigger}
            keyCode={padBankArr[i].keyCode}
            updateDisplay={this.props.updateDisplay}
            power={this.props.power} />
        )
      }) :
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
            clipId={padBankArr[i].id}
            clip="#"
            keyTrigger={padBankArr[i].keyTrigger}
            keyCode={padBankArr[i].keyCode}
            updateDisplay={this.props.updateDisplay}
            power={this.props.power} />
        )
      });
    return (
      <div className="pad-bank" >
        {padBank}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    }
  }

  powerControl = () => {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }

  selectBank = () => {
    if (this.state.power) {
      this.state.currentPadBankId === 'Heater Kit' ?
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit',
        }) :
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit',
        });
    }
  }

  displayClipName = name => {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }

  adjustVolume = e => {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    const powerSlider = this.state.power ? {
      float: 'right'
    } : {
      float: 'left'
    };
    const bankSlider = this.state.currentPadBank === bankOne ? {
      float: 'left'
    } : {
      float: 'right'
    }; {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal
      });
    }
    return (
      <div id="drum-machine" className="inner-container">
        <PadBank
          power={this.state.power}
          updateDisplay={this.displayClipName}
          clipVolume={this.state.sliderVal}
          currentPadBank={this.state.currentPadBank} />

        <div className="controls-container">

          <div className="control">
            <p>Power</p>
            <div onClick={this.powerControl} className="select">
              <div style={powerSlider} className="inner" />
            </div>
          </div>
          <p id="display">
            {this.state.display}
          </p>
          <div className="volume-slider">
            <input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
          </div>
          <div className="control">
            <p>Bank</p>
            <div onClick={this.selectBank} className="select">
              <div style={bankSlider} className="inner" />
            </div>
          </div>

        </div>

      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
