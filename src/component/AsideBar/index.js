import React, { Component } from 'react';
import './style.css';
import IconBack from '../../assets/icons/back.png';

export default class AsideBar extends Component {
    render() {
        return (
            <nav className="aside-bar">
                <header>
                    <img src={IconBack} alt="Botão para fechar asidebar" />
                    <h1>Adicionar tarefa</h1>
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