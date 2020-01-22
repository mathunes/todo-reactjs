import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        render (
            <div class="todo">
                <div class="todo-title">
                    <h3>{this.props.todoData.title}</h3>
                </div>
                <div class="todo-description">
                    <p>{this.props.todoData.description}</p>
                </div>
                <div className="todo-ready">
                    <button>Concluído</button>
                </div>
            </div>
        )
    }
}