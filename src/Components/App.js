import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelUpdate(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelDeleteList() {
    if (items.length) {
      const sure = window.confirm("Are you sure to delete the whole list?");
      if (sure) setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelUpdate}
        onDeleteList={handelDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}
