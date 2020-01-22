import React, { Component } from 'react';
import './style.css';
import IconClose from '../../assets/icons/close.png';

export default class AsideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleTodo: '',
            descriptionTodo: ''
        }

        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    hideAsideBar() {
        document.querySelector('nav.aside-bar').classList.toggle('hide-aside-bar');
    }

    setTitle() {
        this.setState({
            titleTodo: document.querySelector('nav.aside-bar form .title-todo').value
        })
    }

    setDescription() {
        this.setState({
            descriptionTodo: document.querySelector('nav.aside-bar form .description-todo').value
        })
    }

    render() {
        return (
            <nav className="aside-bar">
                <header>
                    <h1>Adicionar tarefa</h1>
                    <img src={IconClose} alt="Botão para fechar asidebar" onClick={this.hideAsideBar} />
                </header>
                <form>
                    <input type="text" className="title-todo" placeholder="Título" onChange={this.setTitle}/>
                    <textarea type="text" className="description-todo" placeholder="Descrição" onChange={this.setDescription}/>
                    <input type="submit" className="save-todo" value="Salvar"/>
                </form>
            </nav>
        )
    }
}