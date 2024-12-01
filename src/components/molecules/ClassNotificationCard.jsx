import React from "react";

export function ClassNotificationCard({ className, personName, date, time, onChatOpen, onConfirmAttendance }) {
  return (
    <div className="card my-3" style={{ width: "12rem" }}>
      <div className="card-body">
        <h5 className="card-title">{className}</h5>
        <p className="card-text">
          Con: <strong>{personName}</strong>
        </p>
        <p className="card-text">
          Fecha: <strong>{date}</strong>
        </p>
        <p className="card-text">
          Hora: <strong>{time}</strong>
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" disabled>
            Abrir Chat
          </button>
          <button className="btn btn-success" disabled>
            Confirmar Asistencia
          </button>
        </div>
      </div>
    </div>
  );
}

