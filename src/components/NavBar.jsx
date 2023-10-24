/* eslint-disable react/prop-types */
import styles from "./NavBar.module.css";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = ({ list, setList }) => {
  const handleCheckAll = () => {
    setList(
      list.every((item) => item.status === "completed")
        ? list.map((item) => ({ ...item, status: "active" }))
        : list.map((item) => ({ ...item, status: "completed" }))
    );
  };

  const handleRemoveAll = () => {
    setList([]);
  };

  return (
    <div className={styles.navContainer}>
      <button onClick={handleCheckAll} className={styles.allClickBtn}>
        <CheckCircleIcon />
      </button>

      <button onClick={handleRemoveAll}>
        <CloseIcon className={styles.allCloseBtn} />
      </button>
    </div>
  );
};

export default NavBar;
