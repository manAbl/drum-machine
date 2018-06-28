import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/index.css';

localStorage.setItem('FCC_Project', 'Drum Machine');

render(
  <App />, document.getElementById('root')
);
