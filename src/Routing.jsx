import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import List from "./components/List/List";

const Routing = () => {
  return (
    <Routes>
      <Route path="/add" element={<Add />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;
