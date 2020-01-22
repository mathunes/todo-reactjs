import React, { Component } from 'react';

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
            <main>

            </main>
        )
    }
}