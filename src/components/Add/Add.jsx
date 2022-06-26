import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";

const Add = () => {
  const { createContact, getContacts, item } = useContext(contactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleSave() {
    if (!name || !surname || !number) {
      alert("Type in!");
    } else {
      let newContact = {
        name,
        surname,
        number,
        image,
      };
      createContact(newContact);
      navigate("/list");
      getContacts();
    }
  }
  return (
    <div>
      <div className="add">
        <h4>Name</h4>
        <input
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <h4>Surname</h4>
        <input
          placeholder="Enter surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          type="text"
        />
        <h4>Phone number</h4>
        <input
          className="add__number"
          placeholder="+996_ _ _ _ _ _ _ _"
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="number"
        />
        <h4>Profile image</h4>
        <input
          className="add__image"
          value={image}
          type="text"
          onChange={e => setImage(e.target.value)}
          placeholder="Enter Image Link"
        />
        <button className="add__btn" onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Add;
