import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./estilosCSS/navbar.css"
import "./estilosCSS/peliculaPrincipal.css"
import NavBar from "./components/navbar.js"
import PeliculaPrincipal from "./components/peliculaPrincipal.js"
import PeliculasTituloCarrusel from './components/peliculas-Titulo-Carrusel.js';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
      <PeliculaPrincipal></PeliculaPrincipal>    
      <PeliculasTituloCarrusel tipoPeliculas="Recomendadas"></PeliculasTituloCarrusel>
      <PeliculasTituloCarrusel tipoPeliculas="Acción"></PeliculasTituloCarrusel>
      <PeliculasTituloCarrusel tipoPeliculas="Aventura"></PeliculasTituloCarrusel>
      </main>
    </div>
  );
}

export default App;
