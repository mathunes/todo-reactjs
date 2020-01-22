import React, { Component } from 'react';
import Todo from '../Todo';
import './style.css';

export default class Main extends Component {
    constructor() {
        super();

        this.showTodo = this.showTodo.bind(this)
    }

    state = {
        todo: []
    }

    showTodo() {
        
        if ((this.state.todo.indexOf(this.props.todoData)) === -1) { //Verificando se esse objeto ja esta no array

            this.setState({
                todo: [...this.state.todo, this.props.todoData]
            });
            
        }    
        
    }

    componentDidUpdate() {
        this.showTodo();
    }

    render() {
        return (
            <main className="todo-container">
                {this.state.todo.map((item, id) => {
                    
                    return (
                        <Todo key={id} todoData={item}/>
                    )
                })}
            </main>
        )
    }
}