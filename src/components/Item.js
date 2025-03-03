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
export default Item;
