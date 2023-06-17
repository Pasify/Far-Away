import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  itemsArray,
  onDeleteItem,
  onToggleItem,
  onclearAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  function sort(e) {
    setSortBy(e.target.value);
  }

  function clearAll() {
    onclearAll();
  }
  let sortedItems;
  if (sortBy === "input") sortedItems = itemsArray;
  if (sortBy === "description")
    sortedItems = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = itemsArray
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select name="" id="" onChange={sort} value={sortBy}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        {itemsArray.length > 0 ? (
          <button onClick={clearAll}>clear list</button>
        ) : null}
      </div>
    </div>
  );
}
