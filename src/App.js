import { useState } from "react";

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
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        //pass the function as props into the packing List
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div>
      <h1> 🏝️ Far Away🧳</h1>
    </div>
  );
}
function Form({ onAddItems }) {
  //cotrolled element:1. create a piece of state
  const [description, setDescription] = useState("");
  //1.create an event handler right in the component function
  const [quantity, setQuantity] = useState(1);
  //[] because of a packing list which is an array

  function handleSubmit(e) {
    //prevent the page from reloading
    e.preventDefault();
    //adding a guard close: if there is no description then return : nothing happens
    if (!description) return;
    // finally let's use these value by creating a newItem
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    //call the function handleAddItems to receive the new item
    onAddItems(newItem);
    //after submittting the form ,return to initial state
    setDescription("");
    setQuantity(1);
  }
  return (
    //2.listen to the submit  event that happens on the form
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😎 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* <option valu={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>*/}
        {/*create the option dynamically*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item ..."
        //2.Now we use that state as a vule of the input field
        value={description}
        //3. to connect the value we type in with that description:we listen to onChange; updatung that piece of state

        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
//3.Pass onDeleteItem as a prop into the packing List
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            //5. we now need to pass it on in the Item component here
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
//4.here we also need onDeleteItem as props because the button is in the Item component
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    //conditionally styling: if the item.packed: true return a textDecoration;,if not return the element
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} key={item.id}
      </span>
      {/*7.very important to use a function () => onDeleteItem(item.id) and pass in the current id*/}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have x on your list,and you already packed x(x %)</em>
    </footer>
  );
}
export default App;
