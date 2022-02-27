import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ADDTOCART, FILLCART } from '../store/cartSlice';

import styles from './Product.module.scss';

const propTypes = {
  /* product id */
  id: PropTypes.string.isRequired,
  /* product title */
  title: PropTypes.string.isRequired,
  /* product price */
  price: PropTypes.number.isRequired,
  /* product maximum price */
  mrp: PropTypes.number.isRequired,
  /* product image */
  image: PropTypes.string.isRequired,
  /* product rating */
  rating: PropTypes.number.isRequired,
  /* product rating count */
  ratingCount: PropTypes.number.isRequired
};

const starPosition = {
  0: '-84px 531px',
  0.5: '-239px 531px',
  1: '-68px 531px',
  1.5: '-223px 531px',
  2: '-52px 531px',
  2.5: '-205px 531px',
  3: '-36px 531px',
  3.5: '-190px 531px',
  4: '-20px 531px',
  4.5: '-175px 531px',
  5: '-5px 531px'
};

const Product = ({ id, title, price, mrp, image, rating, ratingCount }) => {
  const discount = mrp - price;
  const percentage = ((discount / mrp) * 100).toFixed(2);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(ADDTOCART(id));
    dispatch(
      FILLCART({
        id,
        title,
        image,
        price
      })
    );
  };

  return (
    <div className={styles.product} id={id}>
      <Link className={styles.product__img} to={`amazon-app/dp/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <Link to={`amazon-app/dp/${id}`}>
          <p className={styles.product__title}>{title}</p>
        </Link>

        <div className={styles.product__rating}>
          <span className={styles.product__rating__stars} style={{ backgroundPosition: starPosition[rating] }} />
          <span className={styles.product__rating__popover} />
          <span className={styles.product__rating__count}>{ratingCount}</span>
        </div>

        <div className={styles.product__price}>
          <span className={styles.product__price__sell}>
            <span className={styles.product__price__sell__currency}>₹ </span>
            <strong className={styles.product__price__sell__value}>{price}</strong>
          </span>
          <span className={styles.product__price__mrp}>₹{mrp}</span>
          <span>
            Save ₹{discount} ({percentage}%)
          </span>
        </div>
      </div>

      <button className={styles.product__btn} onClick={() => handleAddToCart()}>
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = propTypes;

export { Product };
