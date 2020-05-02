import React, { Component } from "react"

export default class peliculaPrincipal extends Component {
    render() {
        return (
            <div className="peliculaPrincipal">
                <div className="contenedor">
                    <h3 className="titulo">Big hero 6</h3>
                    <p>Adipisicing tempor nisi est irure Lorem proident reprehenderit cupidatat voluptate enim nostrud qui laborum. Et esse ipsum occaecat ipsum cupidatat dolor. Sit sit velit irure minim Lorem exercitation exercitation sunt aliqua commodo.
                    </p>
                    <button role="button" 
                    className="boton">
                    <i className="fas fa-play"></i>Reproducir</button>
                    <button role="button" className="boton">Más información</button>
                </div>
                </div>
        );
    }
}