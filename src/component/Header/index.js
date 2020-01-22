import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <button>
                    <p>Adicionar tarefa</p>
                </button>
                <h1>Tarefas</h1>
            </header>
        )
    }
}