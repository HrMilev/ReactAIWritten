import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

const sortFunctions = {
  byId: (a, b) => a.id - b.id,
  byDescription: (a, b) => a.description.localeCompare(b.description),
  byPacked: (a, b) => a.packed - b.packed,
};

const sortLabelFunctions = {
  byId: "INPUT ORDER",
  byDescription: "DESCRIPTION",
  byPacked: "PACKED STATUS",
};

export default function App() {
  const [items, setItems] = useState([]);
  const [sortFunction, setSortFunction] = useState(
    sortLabelFunctions.byId.toString()
  );
  function handleSort(sortFunction) {
    setSortFunction(sortFunction);
    setItems((prevItems) => [...prevItems].sort(sortFunctions[sortFunction]));
  }

  function handleAddItem(item) {
    setItems((prevItems) => {
      const newItems = [...prevItems, item];
      return newItems.sort(sortFunctions[sortFunction]);
    });
  }
  function handlePacked(id) {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
        .sort(sortFunctions[sortFunction])
    );
  }
  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClear() {
    if (items.length === 0) return;
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} itemsCount={items.length} />
      <List
        items={items}
        onPacked={handlePacked}
        onDelete={handleDelete}
        onClear={handleClear}
        onSort={handleSort}
        sortFunction={sortFunction}
        sortLabelFunctions={sortLabelFunctions}
      />
      <Footer items={items} />
    </div>
  );
}
