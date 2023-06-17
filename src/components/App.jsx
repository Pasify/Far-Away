// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: false },
// ];

import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function HandleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function HandleClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delte all items"
    );
    console.log(confirmed);
    // setItems((items) => items.splice());
    confirmed && setItems((items) => []);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onclearAll={HandleClearAll}
        setItems={setItems}
        itemsArray={items}
        onDeleteItem={HandleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
