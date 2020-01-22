import React, { Component } from 'react';
import './style.css';

export default class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <div className="todo-title">
                    <h3>{this.props.todoData.title}</h3>
                </div>
                <div className="todo-description">
                    <p>{this.props.todoData.description}</p>
                </div>
                <div className="todo-ready">
                    <button>Pronto</button>
                </div>
            </div>
        )
    }
}