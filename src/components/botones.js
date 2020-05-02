import React,{Component } from "react"

export class Boton extends Component{
    render(){
        return(
            <button className="boton">
            {this.props.icon}
            {this.props.children}
            </button>
        );
    }   
}