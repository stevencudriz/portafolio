import React from 'react';
import servicio1 from './lambda/servicio1.png';
import servicio2 from './lambda/servicio2.png';
import servicio3 from './lambda/servicio3.png';

function Seccion3(){
  
  const estilos={
        marginTop:45,
    }
  
  const estilos2={
        marginTop:-40,
  }
  
  return(
    
     <div class="container-fluid w-100 fondo3">
      <div class="row justify-content-center">
        <div class="col-md-12"><h1 class="titulo3">Mis servicios</h1></div>
        <div class="col-md-4 s1" style={estilos}>
           <div class="card h-100">
            <div class="card-header pt-5 text-center servicio1">
              <img src={servicio1} alt="" class="text-center"/>
            </div>
            
            <div class="card-body p-5">
            <p class="texto3">Desarrollo de paginas web</p>
            <ul>
              <li class="lista3">Landing pages</li>
              <li class="lista3">Tienda virtuales</li>
              <li class="lista3">Blogs</li>
              <li class="lista3">Portales web</li>
            </ul>
          </div>
          </div>

        </div>

       <div class="col-md-4 s2">
         
         <div class="card h-70" style={estilos2}>
            <div class="card-header pt-5 text-center servicio2">
              <img src={servicio2} alt="" />
            </div>
            
            <div class="card-body p-5">
            <p class="texto3">App web a la medida</p>
           <ul>
              <li class="lista3">Desarrollo tu app adaptada a tus requerimientos</li>
            </ul>
          </div>
          </div>
         
          
        </div>

        <div class="col-md-4 s3" style={estilos}>
          
          <div class="card h-100">
            <div class="card-header pt-5 text-center servicio3">
              <img src={servicio3} alt="" />
            </div>
            
            <div class="card-body p-5">
            <p class="texto3">Soporte y arreglo de bugs</p>
           <ul>
               <li class="lista3">Realizo ajustes a tu web y la optimizo al 100</li>
            </ul>
          </div>
          </div>
          
        </div>

      </div>
    </div>
  
  );
}

export default Seccion3;
