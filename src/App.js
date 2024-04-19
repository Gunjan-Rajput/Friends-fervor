import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppData from "./AppData"
import Data from "./Data"

class App extends React.Component{

  render(){
    const DataItem = AppData.map(item => <Data key={item.id} data={item}/>)
    return(
      <div className="Data-list">
        {DataItem}
      </div>
    )
  }
}

export default App;
