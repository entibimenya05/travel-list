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
  //1.create an event handler right in the component function
  function handleSubmit(e) {
    //prevent the page from reloading
    e.preventDefault();
  }
  return (
    //2.listen to the submit  event that happens on the form
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😎 trip? </h3>
      <select>
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
      <input type="text" placeholder="Item ..." />
      <button>Add</button>
    </form>
  );
}
function PackingList({ id }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
