import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";

const List = () => {
  const { getContacts, contacts, deleteContact, item } =
    useContext(contactContext);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="info__parent">
      {contacts.map(item => (
        <div className="info" key={item.id}>
          <div className="info__content">
            <img className="info__img-ava" width={45} src={item.image} alt="" />
            <div className="info__name">
              <div>
                <h4>{item.name}</h4>
                <h4>{item.surname}</h4>
              </div>
              <h4 className="info__number">{item.number}</h4>
            </div>
          </div>
          <div>
            <img
              className="info__img"
              width={22}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
              alt="edit"
              onClick={() => navigate(`/edit/${item.id}`)}
            />
            <img
              className="info__img"
              width={22}
              src="https://www.svgrepo.com/show/21045/delete-button.svg"
              alt="delete"
              onClick={() => deleteContact(item.id)}
            />
            <img
              className="info__img"
              width={22}
              src="https://cdn3.iconfinder.com/data/icons/information-notification-black/3/17-512.png"
              alt="details"
              onClick={() => navigate(`/details/${item.id}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
