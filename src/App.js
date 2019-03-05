import React, { Component } from 'react';
import './App.scss';
import Main from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  } 
}

export default App;
