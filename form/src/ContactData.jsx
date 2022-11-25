export default function UserList({ contacts }) {

  
  return (
    <div className="float-child">
      <div>
        {contacts.map((contact) => (
          <div className="card" key={contact.telefono}>
            <h1>Info Contacto</h1>
            <p className="card-name"></p>
            <p>Dueño/Encargado:{contact.dueño}</p>
            <p>Mascota:{contact.mascota}</p>
            <p>Telefono:{contact.telefono}</p>
            <p>Fecha:{contact.date}</p>
            <p>Hora:{contact.time}</p>
            <p>Servicio:{contact.servicio}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
