import HeaderLogo from "./Components/HeaderLogo";
import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import React, { useState } from "react";

import "./App.css";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div>
      <HeaderLogo />
      <Contents />
      <Footer openModal={() => setModalShow(true)} />
      {modalShow && <Form setModalShow={setModalShow} />}
    </div>
  );
}

export default App;
