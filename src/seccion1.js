import React from 'react';
import pc from './lambda/pc.gif';

function Seccion1 (){
  
  return(
    <div class="container-fluid w-100 fondo1" align="center">
      <div class="row">
        <div class="col-md-6 text-left">
          <h1 class="subtitulo1">Steven Cudriz, web dev</h1>
          <h1 class="titulo1">Bienvenido a mi portafolio</h1>
        </div>
        <div class="col-md-6 poligono text-center">
          <img src={pc} alt="hola" class="pc"/>
        </div>
      </div>
    </div>
  );
  
}

export default Seccion1;

