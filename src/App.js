import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./components/Header/Header";
import ContactContextProvider from "./contexts/contactContext";

const App = () => {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </ContactContextProvider>
  );
};

export default App;
