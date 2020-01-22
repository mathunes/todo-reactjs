import React, { Component } from 'react';
import './style.css';

export default class Todo extends Component {

    ready(e) {
        e.target.parentNode.parentNode.style.display = "none";
    }

    render() {
        return (
            <div className="todo">
                <div className="todo-title">
                    <h3>{this.props.todoData.titleTodo}</h3>
                </div>
                <div className="todo-description">
                    <p>{this.props.todoData.descriptionTodo}</p>
                </div>
                <div className="todo-ready">
                    <button onClick={this.ready}>Pronto</button>
                </div>
            </div>
        )
    }
}