import React,{Component} from "react"


export default class Pelicula extends Component {
    render(){
        return(
            <div className="pelicula">
                <a href="#">
                    <img 
                    src={this.props.src}
                    alt="imagenuwu">
                    </img>
                </a>
            </div>
        );
    }
}