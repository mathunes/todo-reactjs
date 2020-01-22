import React, { Component } from 'react';
import './style.css';
import IconPlus from '../../assets/icons/plus.png';

export default class Header extends Component {

    showAsideBar() {
        document.querySelector('nav.aside-bar').classList.toggle('hide-aside-bar');
    }

    render() {
        return (
            <header className="header-main">
                <button className="add-todo" onClick={this.showAsideBar}>
                    <p>Adicionar tarefa</p>
                    <img src={IconPlus} alt="Botão para adicionar tarefa" />
                </button>
                <h1>Tarefas</h1>
            </header>
        )
    }
}