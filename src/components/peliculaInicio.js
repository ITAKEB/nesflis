import React, { Component } from "react";

import { Boton } from "./botones.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//extraer iconos de fontawesome
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

export class PeliculaInicio extends Component {
  render() {
    return (
      <div className="contenedor">
        <h3 className="titulo">{this.props.titulo}</h3>
        <p className="descripcion">{this.props.descripcion}</p>
        <Boton clase="boton" icon={<FontAwesomeIcon icon={faPlay} />}>Reproducir</Boton>
        <Boton clase="boton" icon={<FontAwesomeIcon icon={faInfoCircle} />}>
          Más información
        </Boton>
      </div>
    );
  }
}
