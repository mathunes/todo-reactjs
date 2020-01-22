import React, { Component } from 'react';
import './style.css';

export default class AsideBar extends Component {
    render() {
        return (
            <nav className="aside-bar">
                <h1>Adicionar tarefa</h1>
                <form>
                    <input type="text" className="titleTodo" placeholder="Título"/>
                    <input type="text" className="descriptionTodo" placeholder="Descrição"/>
                    <input type="submit" className="saveTodo" value="Salvar"/>
                </form>
            </nav>
        )
    }
}