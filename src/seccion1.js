import React from 'react';
import poligono from './lambda/Polygon 1.png';
import pc from './lambda/pc.png';

function Seccion1 (){
  
  return(
    <div class="container w-100 fondo1">
      <div class="row">
        <div class="col-md-6 text-left">
          <h1 class="subtitulo1">Steven Cudriz, web dev</h1>
          <h1 class="titulo1">Bievenido a mi portafolio</h1>
        </div>
        <div class="col-md-6 poligono">
          <img src={pc}/>
        </div>
      </div>
    </div>
  );
  
}

export default Seccion1;

