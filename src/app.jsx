import React from 'react';
import Navbar from './components/navbar';
import './app.css';
import Posts from './components/posts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
