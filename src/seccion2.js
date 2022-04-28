import React from 'react';

function Seccion2(){
  
  const [titulo] = React.useState("< Sobre mí />");
  
  return(
    
    <div class="container-fluid w-100">
      <div class="col-md-6">
        <h2>{titulo}</h2>
        <p>Desarrollador web con 2 años de experiencia, con enfoque en CMS y desarrollo a la medida.</p>

        <h3>¿Porqué elegirme?</h3>
        <p>Trabajo en conjunto para organizar tus ideas y llevar tu proyecto a la realidad. </p>
      </div>
      <div class="col-md-6 fondo2">
      </div>
    </div>
  );
}

export default Seccion2;
