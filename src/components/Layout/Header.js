import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import measlImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={measlImg} />
      </div>
    </Fragment>
  );
};

export default Header;
