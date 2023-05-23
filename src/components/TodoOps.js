import { useState } from "react";

function TodoOps() {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  let inputHandler = (e) => {
    console.log(e.target.value);
    let newValue = e.target.value;
    setTodo(newValue);
  };

  let addNewItem = () => {
    let newList = [todo, ...list];
    setList(newList);
    setTodo("");
  };

  let deleteTodo = (index) => {
    list.splice(index, 1);
    console.log(list);
    setList([...list]);
  };

  // UI
  return (
    <div>
      <h1 className="bg-success text-white p-3">Todo App </h1>

      <input
        className="m-3"
        type="text"
        placeholder="Enter Task"
        value={todo}
        onChange={inputHandler}
      />

      <input
        className="m-3"
        type="button"
        value="Add New Task"
        onClick={addNewItem}
      />

      <hr />

      {list.map((item, index) => (
        <div key={index} className="d-flex justify-content-between">
          <h1>{item}</h1>
          <input
            type="button"
            value="DELETE"
            onClick={() => deleteTodo(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoOps;
