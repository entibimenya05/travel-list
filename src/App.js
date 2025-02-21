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
  return (
    <form className="add-form">
      <h3> What do you need for your 😎 trip? </h3>
      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
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
        {item.quantity} {item.description}
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
