 import React from 'react';
 import php from './lambda/php.png';
 import js from './lambda/js.png';
 import css from './lambda/css.png';
 import mysql from './lambda/mysql.png';
 import html from './lambda/html.png';
 import wordpress from './lambda/wordpress.png';

 function Seccion4(){
  return(
   
   <div class="container-fluid w-100 fondo4" id="inicio">
    <div class="row justiy-content-center">
     
    <div class="col-md-12 text-center">
     <h1 class="titulo5">Habilidades</h1>
    </div>
   
     <div class="col-md-4 skill">
   <div class="card">
    <div class="card-body"> 
   <img src={php} alt="" class="w-70"/>
    </div>  
      </div>
   </div>
   
     <div class="col-md-4 skill">
      <div class="card">
       <div class="card-body">
       <img src={js} alt="" class="w-70"/>
      </div>
      </div>
       </div>
   
     <div class="col-md-4 skill">
      <div class="card">
       <div class="card-body">
       <img src={css} alt="" class="w-70"/>
      </div>
      </div>
       </div>
   
     <div class="col-md-4 skill">
      <div class="card">
       <div class="card-body">
       <img src={mysql} alt="" class="w-70"/>
      </div>
      </div>
       </div>
   
     <div class="col-md-4 skill">
      <div class="card">
       <div class="card-body">
       <img src={html} alt="" class="w-70"/>
      </div>
      </div>
       </div>
   
     <div class="col-md-4 skill">
      <div class="card">
       <div class="card-body">
       <img src={wordpress} alt="" class="w-70"/>
      </div>
      </div>
       </div>
     
    </div>
   </div>
  
  );
 }

 export default Seccion4;
