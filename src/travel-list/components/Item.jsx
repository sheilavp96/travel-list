import React from "react";
import "./index.css";

export const Item = ({ item, onDelete, onCheck }) => {
  return (
    <li>
      <input type="checkbox" onChange={(e) => onCheck(e, item.id)} value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};
