import React, { Component } from 'react';
import Encabezado from './Componentes/Encabezado';
import BarraLateral from './Componentes/BarraLateral';
import FiltradoAgregado from './Componentes/FiltradoAgregado';
import Tabla from './Componentes/Tabla';
import './AdministradorEstudiantes.css';

class AdministradorEstudiantes extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { header: 'ID', accessor: 'id' },
      { header: 'Nombre', accessor: 'nombre' },
      { header: 'Apellido', accessor: 'apellido' },
      { header: 'Correo', accessor: 'correo' },
      { header: 'Código Único', accessor: 'codigoUnico' },
      { header: 'Ruta', accessor: 'ruta' },
    ];

    this.data = [
      { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan.perez@epn.edu.ec', codigoUnico: '12345', ruta: '13' },
      { id: 2, nombre: 'Maria', apellido: 'Gomez', correo: 'maria.gomez@epn.edu.ec', codigoUnico: '67890', ruta: '11' },
      { id: 3, nombre: 'Carlos', apellido: 'Lopez', correo: 'carlos.lopez@epn.edu.ec', codigoUnico: '11223', ruta: '10' },
      { id: 4, nombre: 'Ana', apellido: 'Martinez', correo: 'ana.martinez@epn.edu.ec', codigoUnico: '33445', ruta: '8' },
    ];

    this.filterOptions = [
      { value: 'nombre', label: 'Nombre' },
      { value: 'apellido', label: 'Apellido' },
      { value: 'correo', label: 'Correo' },
      { value: 'codigoUnico', label: 'Código Único' },
      { value: 'ruta', label: 'Ruta' },
    ];
  }

  handleFilterChange = (value) => {
    console.log('Filtro seleccionado:', value);
  };

  handleAddClick = () => {
    console.log('Agregar nuevo estudiante');
  };

  render() {
    return (
      <div className="administrador-estudiante">
        <Encabezado />
        <div className="contenido-principal">
          <BarraLateral
            userName="Luisa Casas"
            userRole="Administrador"
            userIcon="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
            menuItems={[
              { label: 'Inicio', link: '#inicio' },
              { label: 'Estudiantes', link: '#estudiantes' },
              { label: 'Conductores', link: '#conductores' },
              { label: 'Rutas', link: '#rutas' },
            ]}
          />
          <div className="contenido-tabla">
            <FiltradoAgregado
              filterOptions={this.filterOptions}
              filterLabel="Filtrar por:"
              filterPlaceholder=""
              addLabel="Agregar estudiante"
              onFilterChange={this.handleFilterChange}
              onAddClick={this.handleAddClick}
            />
            <Tabla columns={this.columns} data={this.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default AdministradorEstudiantes;
