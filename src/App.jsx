import React, { Component } from 'react';
import store from './store';
import { setFirstColor, setSecondColor, setFontSize } from './actions';

import './App.css';
import View from './components/View';

const fontSi = [8, 10, 12, 14, 16, 18, 20, 22, 26, 32, 36, 42, 48, 54];

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
       
      }
  }
    
  setFontSize = (e) => {
      store.dispatch(setFontSize(e.target.value));
  }
   
  setFirstColor = (e) => {
     
      store.dispatch(setFirstColor(e.target.value))
  }
  
  setSecondColor = e => {
      store.dispatch(setSecondColor(e.target.value))
  }
    
  render() {
 
      const state = store.getState();
      const { color, fontSizeValue } = state;

      console.log(state);
      console.log(color);

    return (
      <div className="App">
        <View />
        <div>
            <select onChange={this.setFontSize} value={fontSizeValue}>
           {fontSi.map( f => <option key={f} value={f}>{f}</option>)}
            </select>

            <input type="color" value={state.color[0]} onChange={this.setFirstColor} />
            <input type="color" value={state.color[1]} onChange={this.setSecondColor}/> 
        </div>
       
      </div>
    );
  }
}

export default App;
