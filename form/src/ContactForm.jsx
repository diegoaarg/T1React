import React from "react";
import { useState } from "react";

export default function UserForm({ addContact }) {
  const [contactInfo, setContactInfo] = useState({
    mascota: "",
    dueño: "",
    telefono: "",
    date: "",
    time: "",
    servicio: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addContact(contactInfo);

    setContactInfo({
      mascota: "",
      dueño: "",
      telefono: "",
      date: "",
      time: "",
      servicio: "",
    });
  };

  return (
    <div className="float-container">
      <div className="float-child">
        <h1>Agendar Servicios</h1>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Mascota</label>
              <input
                value={contactInfo.mascota}
                onChange={handleChange}
                type="text"
                placeholder="Mascota"
                name="mascota"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Dueño o Encargado</label>
              <input
                value={contactInfo.dueño}
                onChange={handleChange}
                type="text"
                placeholder="Dueño"
                name="dueño"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Telefono</label>
              <input
                value={contactInfo.telefono}
                onChange={handleChange}
                type="number"
                placeholder="Telefono"
                name="telefono"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Fecha</label>
              <input
                value={contactInfo.date}
                onChange={handleChange}
                type="date"
                name="date"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Hora</label>
              <input
                value={contactInfo.time}
                onChange={handleChange}
                type="time"
                name="time"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Servicio por Agendar</label>
              <input
                value={contactInfo.servicio}
                onChange={handleChange}
                type="text"
                name="servicio"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar cita
            </button>
          </form>
        </div>
      </div>
      <div className="float-child">
        <h1>Servicios Agendados</h1>

      </div>
    </div>
  );
}
