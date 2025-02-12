import React, { useState } from "react";

function Form({ onAddItem, itemsCount }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim()) return;

    onAddItem({
      id: itemsCount + 1,
      description,
      quantity,
      packed: false,
    });

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
