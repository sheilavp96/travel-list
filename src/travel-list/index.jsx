import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import "./components/index.css";

const Travel = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default Travel;
