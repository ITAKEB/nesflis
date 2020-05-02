import React,{Component}from "react"


export default class Navbar extends Component{
    render(){
        return(
            <div >
                <header>
                    <div className="contenedor">
                        <h2 className="logotipo"> Nesflis </h2>
                        <nav>
                        <a className="active" href="#">Inicio</a>
                        <a href="#">Series</a>
                        <a href="#">Peliculas</a>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
} 