import React from 'react';

function Seccion2(){
  
  const [titulo] = React.useState("< Sobre mí />");
  
  return(
    
    <div class="container-fluid w-100 fondo2">
      <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="titulo2">{titulo}</h2>
        <p class="texto2">Desarrollador web con 2 años de experiencia, con enfoque en CMS y desarrollo a la medida.</p>

        <h3 class="titulo2-sm">¿Porqué elegirme?</h3>
        <p class="texto2">Trabajo en conjunto para organizar tus ideas y llevar tu proyecto a la realidad. </p>
      </div>
      <div class="col-md-6">
      </div>
        </div>
    </div>
  );
}

export default Seccion2;
