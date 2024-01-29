import carrito from './assets/cart-fill.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
  return (
    <>
      <a href="#">
        <img className={ styles.carrito } src={ carrito } alt="carrito de compras" />
      </a>
    </>
  );
};

export default CartWidget;
