/* eslint-disable react/prop-types */
// import { Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "./TodoItem.module.css";
import { useDarkMode } from "../context/DarkModeContext";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const { darkMode } = useDarkMode();
  const handleCheck = (e) => {
    const newStatus = e.target.checked ? "completed" : "active";
    toggleTodo({ ...todo, status: newStatus });
    console.log(todo.status);
    console.log(e.target);
  };

  const handleRemove = () => {
    removeTodo(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.status === "completed"}
        onChange={handleCheck}
        className={styles.checkbox}
        style={darkMode ? { accentColor: "gray" } : { accentColor: "black" }}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={handleRemove} className={styles.removeBtn}>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default TodoItem;
