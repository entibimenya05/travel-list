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
function PackingList() {
  return <div className="list">List</div>;
}
function List() {}
function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have x on your list,and you already packed x(x %)</em>
    </footer>
  );
}
export default App;
