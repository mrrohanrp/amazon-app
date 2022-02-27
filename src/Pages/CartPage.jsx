import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from '../components';

import styles from './CartPage.module.scss';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  let items = [];
  let totalPrice = 0;
  let totalItems = 0;
  for (const item in cart) {
    const product = cart[item];
    totalItems += product.quantity;
    totalPrice += product.price * product.quantity;
    items.push(
      <CartItem
        key={product.id}
        id={product.id}
        price={product.price}
        title={product.title}
        image={product.image}
        quantity={product.quantity}
      />
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        <h1 className={styles.cart__heading}>{items.length !== 0 ? 'Shopping Cart' : 'Your Amazon Cart is empty.'}</h1>
        {items.length !== 0 && <p className={styles.cart__price}>Price</p>}
        {items.length !== 0 && <hr />}
        {items.length === 0 ? (
          <p>
            Please add products to the cart and{' '}
            <Link to="/" className={styles.cart__link}>
              continue shopping
            </Link>
            .
          </p>
        ) : (
          items
        )}
        {items.length === 0 && <br></br>}
      </div>

      <div className={styles.cart__proceed}>
        <div className={styles.cart__trust} />
        {items.length !== 0 && (
          <div className={styles.cart__buy}>
            <div className={styles.cart__buy__text}>
              Subtotal ({totalItems} items):
              <span className={styles.price}>
                <span className={styles.currency}> ₹</span>
                {totalPrice.toFixed(2)}
              </span>
            </div>
            <button className={styles.cart__buy__btn}>Proceed to Buy</button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartPage };
