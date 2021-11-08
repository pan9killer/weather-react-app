import React from 'react';
import './App.css';
import Find from './components/Find';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Find />
    </div>
  );
}

export default App;
