import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { useParams } from 'react-router-dom';

const ProductPage = ({ listProduct }) => {
  const { id } = useParams()
  const product = listProduct.find((product) => product.id === id)
  return (
    <div className={css(styles.productContainer)}>
      <div>
        <img className={css(styles.image)} src={product.img} alt='product'/>
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price} $</p>
        <div>
          <button>-</button>
          <label>1</label>
          <button>+</button>
        </div>
        <h2>Description</h2>
        <p>{product.shortDescription}</p>
        <p>{product.shortDescription}</p>
        <p>CPU: {product.CPU}</p>
        <p>Storage: {product.memoryCapacity} {product.memoryType}</p>
        <p>RAM: {product.ram} {product.type}</p>
        <p>Screen Size: {product.ScreenSize} inches</p>
        <p>Full Description: {product.longDescription}</p>
        <button className={css(styles.button)}>Add to Cart</button>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
}

ProductPage.defaultProps = {
}
  

const styles = StyleSheet.create({
  productContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    gap: '50px'
  },
  image: {
   width: '50vw',
    height: 'auto',
  },
  details: {
    marginLeft: '40px',
  },
  button: {
    bottom: '20px',
    borderRadius: '30px',
    fontWeight: 'bold',
    backgroundColor: 'dark blue',
    fontSize: '1.2rem',
    height: '40px',
    width: '150px',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'normal',
    left: '20px',
    gap: '60px'
  },
});

export default ProductPage;