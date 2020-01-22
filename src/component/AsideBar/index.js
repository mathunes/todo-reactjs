import React, { Component } from 'react';
import './style.css';
import IconClose from '../../assets/icons/close.png';

export default class AsideBar extends Component {
    render() {
        return (
            <nav className="aside-bar">
                <header>
                    <h1>Adicionar tarefa</h1>
                    <img src={IconClose} alt="Botão para fechar asidebar" />
                </header>
                <form>
                    <input type="text" className="title-todo" placeholder="Título"/>
                    <textarea type="text" className="description-todo" placeholder="Descrição"/>
                    <input type="submit" className="save-todo" value="Salvar"/>
                </form>
            </nav>
        )
    }
}