import React from 'react';

function Header(){
  return(
   
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light header pe-5 px-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#inicio">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sobre-mi">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#habilidades">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-primary contacto" href="#cotizar-proyecto">Cotizar proyecto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
    )
}

export default Header;
