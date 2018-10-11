import React, { Component } from 'react';
import store from './store';


import './App.css';
import View from './containers/View';
import Editor from './components/Editor';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
       
      }
  }
    
    
  render() {
    const state = store.getState();


    return (
      <div className="App">
       
        <View />
        <Editor />
        
      </div>
    );
  }
}

export default App;
