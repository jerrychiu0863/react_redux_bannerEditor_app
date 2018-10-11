import React, { Component } from 'react';
import store from './store';


import './App.css';
import View from './containers/View';
import SideBar from './components/SideBar';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
       
      }
  }
    
    
  render() {
    const state = store.getState();
    console.log(state);

    return (
      <div className="App">
       
        <View />
        <SideBar />
        
      </div>
    );
  }
}

export default App;
