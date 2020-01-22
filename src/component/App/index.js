import React, { Component } from 'react';
import AsideBar from '../AsideBar';

export default class App extends Component {

  saveTodo(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="App">
        <AsideBar onSubmit={this.saveTodo}/>
      </div>
    );
  }
  
}
