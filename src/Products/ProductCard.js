import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const ProductCard = ({ product }) => {
  return (
    <>
    <img className={css(styles.cardImage)} src={product.img} alt='product'/>
      <em className={css(styles.name)}>{product.name} | {product.CPU} | {product.memoryCapacity} | {product.ram}</em>
      <ul className={css(styles.specs)}>
        <li>Price: {product.price} $</li>
      </ul>
    </>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    display: 'block',
    margin: '0 auto 10px',
    borderRadius: '10px',
    objectFit: 'contain',
    width: '100%',

  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  specs: {
    listStyle: 'none',
    paddingLeft: '0',
  }
});

export default ProductCard;