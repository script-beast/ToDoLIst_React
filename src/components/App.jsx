import React from "react";
import TodoList from "./TodoList";

function App() {

  const [inputText, setInput] = React.useState("")
  const [items, setitems] = React.useState([])

  function InputonChange(event) {
    const newValue = event.target.value
    setInput(newValue)
  }

  function addItems() {
    const val = inputText
    if (!val) return
    setInput("")
    setitems(prev => {
      return [...prev, val]
    })
  }

  function removeItems(id) {
    // console.log(id);
    setitems(prev => { return prev.filter((item,index )=> index !== id) })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={InputonChange} value={inputText} type="text" />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <TodoList key={index} id={index} text={item} deleteitem={removeItems} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
