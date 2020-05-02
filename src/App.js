import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./estilosCSS/navbar.css"
import "./estilosCSS/peliculaPrincipal.css"
import NavBar from "./components/navbar.js"
import PeliculaPrincipal from "./components/peliculaPrincipal.js"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <PeliculaPrincipal></PeliculaPrincipal>
      
    </div>
  );
}

export default App;
