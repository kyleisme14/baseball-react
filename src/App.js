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
      <div title='App' className="App">
        <div ><Login /></div>
        <FavoriteTeam /> 
        <div>
        <div><Cover /></div>
      
        
        <div ><Contact /></div>
        <div ><Forum /></div>
      </div>
      </div>
    )
  }
}

export default App;
