import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  const filters = ["all", "active", "completed"];
  const [currentFilter, setCurrentFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <div className={styles.container}>
        <section className={styles.innerContainer}>
          <Header
            filters={filters}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <TodoList currentFilter={currentFilter} />
        </section>
      </div>
    </DarkModeProvider>
  );
};

export default App;
