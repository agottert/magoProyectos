import React from 'react';

const agregarUsuario=()=>{
    /*store.usuarios.push({
      nombre: "Eugenia",
      apellido:"Rodriguez",
      mail:"ewelynda@gmail.com",
      password:"79797897",
      nacimiento:"29/08/2014",
    })*/
  }

const Form =()=> (
    <div>
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Apellido"/>
      <input type="mail" placeholder="Mail"/>
      <input type="password" placeholder="Password"/>
      <input type="date" placeholder="Fecha de nacimiento"/>
      <button onClick={agregarUsuario}>Agregar</button>
    </div>
  )

  export default Form;