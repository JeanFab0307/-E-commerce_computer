import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { cartAddItem } from '../actions/cartActionCreator';

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listProducts, cartAddItem } = this.props
    return (
      <>
        {listProducts.map((product) => (
          <Link key={product.id} className={css(styles.card, styles.hover) } to={`/product/${product.id}`}>
            <div>
              <ProductCard
              product={product}
              />
            </div>
          </Link>
        ))}
        {/* <button onClick={() => cartAddItem({id: '1', name: 'Asus Rog', cpu: 'core i7', storage: 512, memType: 'SSD', ram: 32, price: 2000})}>
          cartme
        </button> */}
      </>
    );
  }
}


const styles = StyleSheet.create({
  card: {
    display: 'block',
    margin: '1rem 1rem',
    padding: '1rem 1rem 0',
    width: 'calc((100% / 4) - 2rem )',
    border: 'solid 1px grey',
    borderRadius: '10px',
    textDecoration: 'none',
    color: 'black'

  },
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
  },
  hover: {
    ':hover': {
        cursor: 'pointer'
    }
},
});

const mapDispacthToProps = {
  cartAddItem,
}
export default connect(null, mapDispacthToProps)(ProductsPreview);