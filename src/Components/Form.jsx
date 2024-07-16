import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
