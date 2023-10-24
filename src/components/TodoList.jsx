/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

import TodoItem from "./TodoItem";
import NavBar from "./NavBar";

import styles from "./TodoList.module.css";

const TodoList = ({ currentFilter }) => {
  const [list, setList] = useState([
    { text: "start a new react project", id: uuidv4(), status: "active" },
  ]);
  const [userInput, setUserInput] = useState("");

  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };
  const removeTodo = (targetTodo) => {
    setList(list.filter((item) => item.id !== targetTodo.id));
  };
  const toggleTodo = (targetTodo) => {
    setList(
      list.map((item) => (item.id === targetTodo.id ? targetTodo : item))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim().length) {
      alert("할 일을 한 글자 이상 입력해 주세요.");
      return;
    }
    addTodo({ text: userInput, id: uuidv4(), status: "active" });
    setUserInput("");
  };

  const handleInput = (e) => {
    if (e.target.value.length > 30) {
      alert("30자 이하로 입력해 주세요.");
      return;
    }

    setUserInput(e.target.value);
  };

  const showFilteredItems = (todos, filter) => {
    if (filter === "all") {
      return todos;
    } else {
      return todos.filter((item) => item.status === filter);
    }
  };

  const filteredList = showFilteredItems(list, currentFilter);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputText}>
        <Input
          type="text"
          id="userinput"
          value={userInput}
          onChange={handleInput}
          placeholder="I have to..."
          size="sm"
          display="flex"
          flexDirection="column"
          width="180px"
          variant="flushed"
        />

        <button type="submit" className={styles.plusBtn}>
          <AddIcon />
        </button>
      </form>
      <NavBar list={list} setList={setList} />
      <ul>
        {filteredList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
