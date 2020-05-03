import React, { Component } from "react";

import { PeliculaInicio } from "./peliculaInicio.js";

export default class PeliculaPrincipal extends Component {
  state = {
    titulo: "Big hero 6",
    descripcion:
      "Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the car’s floor. The Sprawl was a steady pulse of pain midway down his spine. He tried to walk past her back into the dark, curled in his capsule in some coffin hotel.",
  };


  render() {
    return (
      <div className="peliculaPrincipal">
        <PeliculaInicio
          titulo={this.state.titulo}
          descripcion={this.state.descripcion}
        ></PeliculaInicio>
      </div>
    );
  }
}
