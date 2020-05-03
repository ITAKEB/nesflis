import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//extraer iconos de fontawesome
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Boton } from "./botones.js";
import Pelicula from "./pelicula.js"
export default class PeliculasTituloCarrusel extends Component {
    state={
        peliculas: [1]
    }

    componentWillMount(){
        this.setState({peliculas:[
            require("../imagenes/img1.jpg"),
            require("../imagenes/img6.jpg"),
            require("../imagenes/img2.jpg"),
            require("../imagenes/img3.jpg"),
            require("../imagenes/img4.jpg"),
            require("../imagenes/img5.jpg"),
            require("../imagenes/img6.jpg"),
            require("../imagenes/img7.jpg")
          ]
        })
    }


    crearPeliculas = (peliculas) => {
        return peliculas.map( pelicula=> 
            <Pelicula src={pelicula}></Pelicula>
        )
        
    }


  render() {
    return (
      <div className="peliculasRecomendadas">
        <div className="contenedor">
          <div className="contenedor-titulo-controles">
            <h3>{this.props.tipoPeliculas}</h3>
            <div className="indicadores">
            </div>
          </div>
          <div className="contenedor-principal">
            <Boton id="flecha-izquierda" clase="flecha-izquierda">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Boton>
            <div className="contenedor-carrusel">
              <div className="carrusel">
                {this.crearPeliculas(this.state.peliculas)}
              </div>
            </div>
            <Boton id="flecha-derecha" clase="flecha-derecha">
              <FontAwesomeIcon icon={faAngleRight} />
            </Boton>
          </div>
        </div>
      </div>
    );
  }
}
