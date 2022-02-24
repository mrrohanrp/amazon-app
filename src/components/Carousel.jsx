import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Carousel.module.scss';

const propTypes = {
  /* images for carousel */
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      /* images */
      img: PropTypes.string
    })
  ).isRequired
};

const delay = 5000;

const Carousel = ({ slides }) => {
  const length = slides ? slides.length : null;

  const [current, setCurrent] = useState(0);

  const timeoutRef = React.useRef(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [timeoutRef]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)), delay);

    return () => {
      resetTimeout();
    };
  }, [current, length, resetTimeout]);

  const handleNextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const handlePrevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  return (
    slides &&
    length && (
      <div className={styles.carousel}>
        <div className={styles.carousel__slider} style={{ transform: `translateX(${-current * 100}%)` }}>
          {slides.map((slide, idx) => {
            return (
              <Link
                className={classNames(styles.carousel__slide, { [styles.active]: idx === current })}
                key={slide.img}
                to="/"
              >
                <img className={styles.carousel__slide__img} src={slide.img} alt="slide" />
              </Link>
            );
          })}
        </div>

        <button className={styles.carousel__prev} onClick={handlePrevSlide}>
          <span className={styles.carousel__prev__btn} />
        </button>

        <button className={styles.carousel__next} onClick={handleNextSlide}>
          <span className={styles.carousel__next__btn} />
        </button>
      </div>
    )
  );
};

Carousel.propTypes = propTypes;

export { Carousel };
