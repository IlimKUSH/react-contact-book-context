import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container">
        <Link className="container__add" to={"/add"}>
          <button>Add</button>
        </Link>
        <Link className="container__contacts" to={"/list"}>
          <button>Contacts</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
