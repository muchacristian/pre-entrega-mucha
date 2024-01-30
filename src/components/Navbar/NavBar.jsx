import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/LOGO.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className={styles.navegacion}>
          <a href="#">
            <img className={styles.logo} src={logo} alt="logo de la tienda" />
          </a>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
