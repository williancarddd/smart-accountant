import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContext } from './Context/CounterContext';
import {Home} from './Templates/Home/'

ReactDOM.render(
  <React.StrictMode>
  <CounterContext>
    <Home />
  </CounterContext>
  </React.StrictMode>,
  document.getElementById('root')
);

