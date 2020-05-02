import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//extraer iconos de fontawesome
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

import {Boton} from "./botones.js"


export default class PeliculaPrincipal extends Component {
  render() {
    return (
      <div className="peliculaPrincipal">
        <div className="contenedor">
          <h3 className="titulo">Big hero 6</h3>
          <p className="descripcion">
            Adipisicing tempor nisi est irure Lorem proident reprehenderit
            cupidatat voluptate enim nostrud qui laborum. Et esse ipsum occaecat
            ipsum cupidatat dolor. Sit sit velit irure minim Lorem exercitation
            exercitation sunt aliqua commodo.
          </p>
          <Boton icon={<FontAwesomeIcon icon={faPlay} />}>Reproducir</Boton >
          <Boton icon={<FontAwesomeIcon icon={faInfoCircle} />}>Más información</Boton>
        </div>
      </div>
    );
  }
}
