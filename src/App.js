import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
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
function Form() {
  //cotrolled element:1. create a piece of state
  const [description, setDescription] = useState("");
  //1.create an event handler right in the component function
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    //prevent the page from reloading
    e.preventDefault();
    //adding a guard close: if there is no description then return : nothing happens
    if (!description) return;
    // finally let's use these value by creating a newItem
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
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
function PackingList({ id }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    //conditionally styling: if the item.packed: true return a textDecoration;,if not return the element
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} key={item.id}
      </span>
      <button>❌</button>
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
