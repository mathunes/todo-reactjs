import React, { Component } from 'react';
import AsideBar from '../AsideBar';

export default class App extends Component {

  constructor() {
    super();
    this.saveTodo = this.saveTodo.bind(this);

    this.state = {
      titleTodo: '',
      descriptionTodo: ''
    }
  }

  saveTodo(dataTodo) {
    this.setState({
      titleTodo: dataTodo.titleTodo,
      descriptionTodo: dataTodo.descriptionTodo
    });
  }

  render() {
    return (
      <div className="App">
        <AsideBar onSubmit={this.saveTodo}/>
      </div>
    );
  }
  
}
