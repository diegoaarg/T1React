import { useState } from "react";
import ContactData from "./ContactData.jsx";
import ContactForm from "./ContactForm.jsx";
import "./App.css";

function App() {
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <div className="head">
        <h1>Administrador de Servicios</h1>
      </div>
      
      <ContactForm addContact={addContact} />
      <ContactData contacts={contacts} />
    </div>
  );
}

export default App;
