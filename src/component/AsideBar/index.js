import React, { Component } from 'react';
import './style.css';

export default class AsideBar extends Component {
    render() {
        return (
            <nav className="aside-bar">
                <h1>Adicionar tarefa</h1>
                <form>
                    <input type="text" className="title-todo" placeholder="Título"/>
                    <textarea type="text" className="description-todo" placeholder="Descrição"/>
                    <input type="submit" className="save-todo" value="Salvar"/>
                </form>
            </nav>
        )
    }
}