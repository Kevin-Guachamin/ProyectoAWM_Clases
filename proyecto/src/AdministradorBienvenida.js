import React, { Component } from 'react';
import Encabezado from './Componentes/Encabezado';
import BarraLateral from './Componentes/BarraLateral';
import MenuAdministrador from './Componentes/MenuAdministrador';
import './AdministradorBienvenida.css';

class AdministradorBienvenida extends Component {
  render() {
    const menuItems = [
      { label: 'Inicio', link: '#inicio' },
      { label: 'Estudiantes', link: '#estudiantes' },
      { label: 'Conductores', link: '#conductores' },
      { label: 'Rutas', link: '#rutas' },
    ];

    return (
      <div className="app-container">
        <Encabezado />
        <div className="app-body">
          <BarraLateral
            userName="Luisa Casas"
            userRole="Administrador"
            userIcon="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
            menuItems={menuItems}
          />
          <MenuAdministrador />
        </div>
      </div>
    );
  }
}

export default AdministradorBienvenida;
