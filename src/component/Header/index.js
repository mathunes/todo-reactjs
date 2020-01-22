import React, { Component } from 'react';
import './style.css';
import IconPlus from '../../assets/icons/plus.png';

export default class Header extends Component {
    render() {
        return (
            <header className="header-main">
                <button className="add-todo">
                    <p>Adicionar tarefa</p>
                    <img src={IconPlus} alt="Botão para adicionar tarefa" />
                </button>
                <h1>Tarefas</h1>
            </header>
        )
    }
}