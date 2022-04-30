import React from 'react';
import servicio1 from './lambda/servicio1.png';
import servicio2 from './lambda/servicio2.png';
import servicio3 from './lambda/servicio3.png';

function Seccion3(){
  return(
    
     <div class="container-fluid w-100 fondo3">
      <div class="row justify-content-center">
        <div class="col-md-12"><h1 class="titulo3">Mis servicios</h1></div>
        <div class="col-md-4 servicio1">
         <div class="card">
          <div class="card-header">
           <img src={servicio1} alt="" />
          </div>
          <div class="card-body">
            <p>Desarrollo de paginas web</p>
            <ul>
              <li>Landing pages</li>
              <li>Tienda virtuales</li>
              <li>Blogs</li>
              <li>Portales web</li>
            </ul>
          </div>
         </div>
        </div>

        <div class="col-md-4 servicio2">
          <div class="card">
          <div class="card-header">
           <img src={servicio2} alt="" />
          </div>
          <div class="card-body">
            <p>App web a la medida</p>
            <ul>
            <li>Desarrollo tu app adaptada a tus requerimientos</li>
          </ul>
          </div>
         </div>    
        </div>

        <div class="col-md-4 servicio3">
          <div class="card">
          <div class="card-header">
           <img src={servicio3} alt="" />
          </div>
          <div class="card-body">
            <p>Soporte y arreglo de bugs</p>
            <ul>
              <li>Realizo ajustes a tu web y la optimizo al 100</li>
            </ul>
          </div>
         </div>
        </div>

      </div>
    </div>
  
  );
}

export default Seccion3;
