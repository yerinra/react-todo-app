/* eslint-disable react/prop-types */
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
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
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={handleRemove} className={styles.removeBtn}>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default TodoItem;
