import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      usuarios: state.usuarios
    }
  }

const List=({ usuarios })=>(
    
    <table className="list">
     <tbody>   
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Mail</th>
        <th>Password</th>
        <th>Fecha de Nacimiento</th>
      </tr>
      {
        usuarios.map((usuario)=>( 
          <tr key={usuario.mail}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.mail}</td>
            <td>{usuario.password}</td>
            <td>{usuario.nacimiento}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )

  export default connect(
    mapStateToProps
  )(List)

  
