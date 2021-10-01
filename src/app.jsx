import React from 'react';
import Navbar from './components/navbar';
import './app.css';
import Posts from './components/posts';
import { HashRouter, Route } from 'react-router-dom';
import PostDetail from './components/postDetail';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Posts} />
        <Route path="/post-detail" component={PostDetail} />
      </div>
    </HashRouter>
  );
}

export default App;
