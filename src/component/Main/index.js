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
        // this.setState({
        //     todo: [...this.state.todo, this.props.todoData]
        // })

        // console.log(this.state);
        console.log(this.props.todoData);
    }

    componentDidUpdate() {
        this.showTodo();
    }

    render() {
        return (
            <main>
                <button onClick={this.showTodo}>Click</button>           
            </main>
        )
    }
}