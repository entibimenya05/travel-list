import { useState } from "react";
import Item from "./Item";
//3.Pass onDeleteItem as a prop into the packing List
function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  //3 step for our piece of state
  const [sortBy, setSortBy] = useState("input");
  //create a new derived variable
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {/*from now on instaed using items in the array, we will now use sortedItems*/}
        {sortedItems.map((item) => (
          <Item
            item={item}
            //5. we now need to pass it on in the Item component here
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
            key={item.id}
          />
        ))}
      </ul>
      {/*sorting:more on derived state;
        3. use onChange handler to update*/}
      <div className="actions">
        {/*2.use that state sortBy as a value*/}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by inputy order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
export default PackingList;
