import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <header className="header-main">
                <button>
                    <p>Adicionar tarefa</p>
                </button>
                <h1>Tarefas</h1>
            </header>
        )
    }
}