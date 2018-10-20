import React, { Component } from 'react';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './containers/View';
import SideBar from './containers/SideBar';
import ListModel from './containers/ListModel';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
       
      }
  }
    

    
  render() {
    const state = store.getState();
    const { isModelOpen } = state;
    console.log(state);
    console.log(isModelOpen);
    return (
      <div className="App">
       
        <View />
        <SideBar />
        <ListModel />
        
      </div>
    );
  }
}

export default App;
