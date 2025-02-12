import React from "react";
import Item from "./Item";

function List({
  items,
  onPacked,
  onDelete,
  onClear,
  onSort,
  sortFunction,
  sortLabelFunctions,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggle={onPacked}
            onDelete={onDelete}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortFunction} onChange={(e) => onSort(e.target.value)}>
          {Object.entries(sortLabelFunctions).map(([key, value]) => (
            <option value={key} key={key}>
              {value}
            </option>
          ))}
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}

export default List;
