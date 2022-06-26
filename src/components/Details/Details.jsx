import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";

const Details = () => {
  const navigate = useNavigate;
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
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <h4 style={{ fontWeight: 400 }}>Profile image</h4>
        <img
          style={{ borderRadius: "50%", marginTop: "10px" }}
          width={200}
          src={image}
          alt=""
        />
        <h4 className="det__name">
          Name: <span>{name}</span>
        </h4>
        <h4 className="det__name">
          Surname: <span>{surname}</span>
        </h4>
        <h4 className="det__name">
          Phone number: <span>{number}</span>
        </h4>
      </div>
    </div>
  );
};

export default Details;
