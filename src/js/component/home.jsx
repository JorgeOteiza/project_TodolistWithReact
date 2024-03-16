import React, { useState } from "react";
import "../../styles/style.css";

const Home = () => {
  const [todoListData, setTodoListData] = useState([
    "Hacer la cama",
    "Tomar desayuno",
  ]);
  const [inputValue, setInputValue] = useState("");

  const printList = () => {
    return todoListData.length > 0 ? (
      todoListData.map((todoText, index) => (
        <article key={index}>
          <p>
            {todoText}{" "}
            <button onClick={() => deleteTodoItem(todoText)}>x</button>
          </p>
        </article>
      ))
    ) : (
      <p>La lista está vacía</p>
    );
  };

  const addTodoItem = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodoListData([...todoListData, inputValue]);
    setInputValue("");
  };

  const deleteTodoItem = (todoItemToDelete) => {
    setTodoListData(todoListData.filter((value) => value !== todoItemToDelete));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={addTodoItem}>
        <input
          name="todoInput"
          id="todoInput"
          placeholder="Ej."
          autoFocus
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <section id="todoList">{printList()}</section>
    </div>
  );
};

export default Home;
