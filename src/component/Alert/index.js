import React, { Component } from 'react';
import IconClose from '../../assets/icons/close.png';

export default class Alert extends Component {
    render() {
        return (
            <div className="alert">
                <p>{this.props.message}</p>
                <img src={IconClose} alt="Alerta" />
            </div>
        )
    }
}