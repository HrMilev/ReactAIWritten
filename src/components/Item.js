import React from "react";

function Item({ item, onToggle, onDelete }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span
        onClick={() => onToggle(item.id)}
        style={{
          textDecoration: item.packed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
