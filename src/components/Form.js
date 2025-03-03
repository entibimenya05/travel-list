import { useState } from "react";
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
export default Form;
