import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CartItem.module.scss';

const propTypes = {
  /* product id */
  id: PropTypes.string.isRequired,
  /* product title */
  title: PropTypes.string.isRequired,
  /* product price */
  price: PropTypes.number.isRequired,
  /* product image */
  image: PropTypes.string.isRequired,
  /* product quantity */
  quantity: PropTypes.number.isRequired
};

const CartItem = ({ id, title, price, image, quantity }) => {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__content}>
          <Link to={`/amazon-app/dp/${id}`} className={styles.item__content__image}>
            <img src={image} alt={title}></img>
          </Link>

          <div className={styles.item__content__desc}>
            <Link to={`/amazon-app/dp/${id}`}>
              <div className={styles.item__content__desc__title}>{title}</div>
            </Link>
            <p>In stock</p>
            <div className={styles.item__content__desc__qty}>
              Qty:
              <button className={styles.item__content__desc__subtract}>-</button>
              <div>{quantity}</div>
              <button className={styles.item__content__desc__add}>+</button> |
              <span className={styles.item__content__desc__delete}>Delete</span>
            </div>
          </div>
        </div>

        <span className={styles.item__price}>
          <span className={styles.item__price__currency}> ₹</span>
          {(price * quantity).toFixed(2)}
        </span>
      </div>
      <hr></hr>
    </>
  );
};

CartItem.propTypes = propTypes;

export { CartItem };
