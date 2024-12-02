import React, { useState } from 'react';

export function Admin() {
  const [selectedReport, setSelectedReport] = useState(null);

  // Datos de ejemplo para los reportes
  const reportData = {
    usuarios: [
      { id: 1, reporter: "Juan Pérez", reported: "Carlos Gómez", content: "Perfil inapropiado" },
      { id: 2, reporter: "Ana Torres", reported: "María López", content: "Lenguaje ofensivo en el perfil" },
    ],
    publicaciones: [
      { id: 3, reporter: "Pedro Sánchez", reported: "Lucía Martínez", content: "Publicación spam" },
      { id: 4, reporter: "Laura Castillo", reported: "Andrés Rojas", content: "Contenido inapropiado" },
    ],
    comentarios: [
      { id: 5, reporter: "Mario Vargas", reported: "Sofía Ramírez", content: "Comentario ofensivo" },
      { id: 6, reporter: "Clara Duarte", reported: "Fernando Pérez", content: "Contenido vulgar" },
    ]
  };

  // Función para seleccionar el reporte y mostrar detalles
  const handleViewDetails = (type) => {
    setSelectedReport(type);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4 text-primary font-weight-bold">Panel de Administración</h1>

      <div className="row">
        {/* Reporte de Usuarios */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-header bg-primary text-white">Reporte de Usuarios</div>
            <div className="card-body">
              <h5 className="card-title">Usuarios Registrados</h5>
              <p className="card-text">Lista con los ultimos reportes a usuarios.</p>
              <button className="btn btn-primary" onClick={() => handleViewDetails('usuarios')}>Ver Detalles</button>
            </div>
          </div>
        </div>

        {/* Reporte de Publicaciones */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-header bg-success text-white">Reporte de Publicaciones</div>
            <div className="card-body">
              <h5 className="card-title">Publicaciones Totales</h5>
              <p className="card-text">Lista con los ultimos reportes de publicaciones.</p>
              <button className="btn btn-success" onClick={() => handleViewDetails('publicaciones')}>Ver Detalles</button>
            </div>
          </div>
        </div>

        {/* Reporte de Comentarios */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-header bg-warning text-dark">Reporte de Comentarios</div>
            <div className="card-body">
              <h5 className="card-title">Comentarios Realizados</h5>
              <p className="card-text">Lista con los ultimos reportes a comentarios en publicaciones.</p>
              <button className="btn btn-warning" onClick={() => handleViewDetails('comentarios')}>Ver Detalles</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mostrar detalles del reporte seleccionado */}
      {selectedReport && (
        <div className="mt-5">
          <h3>Detalles de {selectedReport.charAt(0).toUpperCase() + selectedReport.slice(1)}</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Reportado por</th>
                <th>Usuario Reportado</th>
                <th>Contenido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reportData[selectedReport].map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.reporter}</td>
                  <td>{report.reported}</td>
                  <td>{report.content}</td>
                  <td>
                    <button className="btn btn-link text-primary">Ver Más</button>
                    <button className="btn btn-link text-danger">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

