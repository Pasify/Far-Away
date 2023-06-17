import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  // const [items, setItems] = useState(initialItems);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity: qty,
      packed: false,
      id: Date.now(),
    };

    // add new item to the list
    onAddItems(newItem);

    // set back to initial state
    setQty(1);
    setDescription("");
  }
  function handleChange(e) {
    setDescription(e.target.value);
  }
  function changevalue(e) {
    setQty(Number(e.target.value));
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>what do you need for your 😊 trip?</h3>
      <select name="" id="" onChange={changevalue} value={qty}>
        {Array.from(
          {
            length: 10,
          },
          (_, index) => index + 1
        ).map((ele) => (
          <option value={ele} key={ele}>
            {ele}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        className="form-input"
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
