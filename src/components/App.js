import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
//const initialItems = [
//  { id: 1, description: "Passports", quantity: 2, packed: false },
//  { id: 2, description: "Socks", quantity: 12, packed: false },
//  { id: 3, description: "Charger", quantity: 1, packed: true },
//];

function App() {
  const [items, setItems] = useState([]);

  //will receive the new item we just created
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //deleting an item; the click lives in the Item but the state lives in the App,so you create handleDelete in the App
  //2. pass the function as a props into the packingList
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    //to porevent the user from accidently clearing everything
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        //pass the function as props into the packing List
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      {/*2.pass items as a props to solve the items in the Stats component*/}
      <Stats items={items} />
    </div>
  );
}

//3. accept items props here
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  //1.derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {/*4. Here we can use it now below*/}
      <em>
        {percentage === 100
          ? "You got everything ! Ready to go ✈️"
          : ` 🧳 You have ${numItems} on your list,and you already packed ${numPacked}(
        {percentage}
        %)`}
      </em>
    </footer>
  );
}
export default App;
