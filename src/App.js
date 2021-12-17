import React, { Component } from 'react'
import './App.css';

// Components
import Cover from './Cover';

import Login from './Login';
import Forum from './Forum';
import Contact from './Contact';
import FavoriteTeam from './FavoriteTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FavoriteTeam />
        <div id='container'>
          <Cover />
        </div>
        <div id='container'>
        <div id='box'><Login /></div>
        <div id='box'><Contact /></div>
        
      </div>
<div id='box'><Forum /></div>
      </div>
    )
  }
}

export default App;
