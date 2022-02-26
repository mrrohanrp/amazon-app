import React from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '../components';

import styles from './CartPage.module.scss';

const CartPage = () => {
  let cart = {
    B09JQZ3Y7V: {
      id: 'B09JQZ3Y7V',
      title:
        'Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver',
      price: 193900,
      mrp: 194900,
      image: '../assets/img/products/61cCf94xIEL._SX679_.jpg',
      rating: 4.5,
      ratingCount: 55,
      quantity: 1
    }
  };

  let items = [];
  let i = 0;
  let totalPrice = 0;
  let totalItems = 0;
  for (const item in cart) {
    const e = cart[item];
    totalItems += e.quantity;
    totalPrice += e.price * e.quantity;
    items.push(<CartItem key={i++} id={e.id} price={e.price} title={e.title} image={e.image} quantity={e.quantity} />);
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
