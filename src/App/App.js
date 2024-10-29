import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import CartDrawer from '../Cart/CartDrawer';
import Cart from '../Cart/Cart';
import ProductPage from '../Products/ProductPage';
import ProductsPreview from '../Products/ProductPreview';
import cardImage from '../assets/pc.jpeg'
import { displayCartDrawer, hideCartDrawer } from '../actions/uiActionCreator';
import { fetchProducts } from '../actions/productActionCreator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listProducts = [
      {id: '1', name: 'Asus Rog', img: cardImage, cpu: 'core i7', storage: 512, memType: 'SSD', ram: 32, price: 2000},
      {id: '2', name: 'Acer', img: cardImage, cpu: 'core i7', storage: 1024, memType: 'SSD', ram: 8, price: 1500},
      {id: '3', name: 'Hp pavilion', img: cardImage, cpu: 'core i7', storage: 100, memType: 'SSD', ram: 8, price: 800},
      {id: '4', name: 'MacBook', img: cardImage, cpu: 'core i7', storage: 1000, memType: 'SSD', ram: 8, price: 1900},
    ];

    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
            displayDrawer,
            hideCartDrawer,
            isLoggedIn,
            products
          } = this.props;

    return (
      <div className={css(styles.app)}>
        <Header />
        {displayDrawer &&
        <div className={css(styles.cart)}>
          <CartDrawer />
        </div>}
        <div className={css(styles.body)}
        onClick={ displayDrawer ? (hideCartDrawer) : (() => {})}>
          <Routes>
            <Route path='/' 
            element={
              <>
              <div className={css(styles.card)}>
                <ProductsPreview listProducts={products}/>
              </div>
              </>
            }
            />
            <Route path='/product/:id' element={<ProductPage listProduct={this.listProducts}/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    padding: '20px 40px'
  },
  cart: {
    position: 'fixed',
    top: '0px',
    height: '100vh',
    width: '400px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: 'white',
    right: '0px',
    border: 'dashed 1px grey'
  },
  body: {
    padding: '0 40px'
  },
})

const mapStateToProps = (state) => {
  return {
    displayDrawer: state.ui.get('isCartDrawerVisible'),
    products: state.products.get('products')
  };
};
const mapDispacthToProps = {
  hideCartDrawer,
  displayCartDrawer,
  fetchProducts,
}
export default connect(mapStateToProps, mapDispacthToProps)(App);