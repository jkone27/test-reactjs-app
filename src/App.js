import React from 'react';
import logo from './logo.svg';
import './App.css';
import { brotliDecompressSync } from 'zlib';
import Pets from './component/Pets';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Pets!</h1>
        <span></span>
        <Pets/>
      </header>
    </div>
  );
}

export default App;
