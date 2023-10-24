/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filters, currentFilter, setCurrentFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Todo</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter, idx) => (
          <li key={`filter_${idx}`}>
            <button
              onClick={() => setCurrentFilter(filter)}
              className={`${styles.filterText} ${
                filter === currentFilter && styles.selected
              }`}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
