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

  const handleDeleteItem = (id) => {
    //const removeItem = items.filter((item) => item.id !== id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheck = (e, id) => {
    // const changePackage = items.map((item) =>
    //   item.id === id ? { ...item, packed: !item.packed } : item
    // );
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: e.target.checked } : item))
    );
  };

  const handleClear = () => {
    if (!items.length) return;
    const confirm = window.confirm("Are you sure you want to delete all items ?");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onCheck={handleCheck}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default Travel;
