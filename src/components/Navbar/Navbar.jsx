import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.Navbar__link} to="/">
        Home
      </Link>
      <Link className={styles.Navbar__link} to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
