import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from '../containers/View';
import SideBar from '../containers/SideBar';
import ListModel from '../containers/ListModel';

const App = () => {

    return (
      <div className="App">
       
        <View />
        <SideBar />
        <ListModel />
        
      </div>
    );
}

export default App;
