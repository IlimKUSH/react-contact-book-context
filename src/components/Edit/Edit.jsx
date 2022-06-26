import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneContact, oneContact, updateContact } =
    useContext(contactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getOneContact(id);
  }, []);

  function handleSave() {
    let editedContact = {
      name,
      surname,
      number,
      image,
    };
    updateContact(id, editedContact);
    navigate("/list");
  }

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setNumber(oneContact.number);
      setImage(oneContact.image);
    }
  }, [oneContact]);

  return (
    <div>
      <div className="edit">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <input
          value={surname}
          onChange={e => setSurname(e.target.value)}
          type="text"
        />
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="number"
        />
        <input
          className="add__image"
          value={image}
          type="text"
          onChange={e => setImage(e.target.value)}
          placeholder="Enter Image Link"
        />
        <button className="edit__btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
