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
import Profil from '../Profil/Profil';
import { displayCartDrawer, hideCartDrawer } from '../actions/uiActionCreator';
import { fetchProducts } from '../actions/productActionCreator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
            displayDrawer,
            hideCartDrawer,
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
                <ProductsPreview listProducts={products.slice(0, 20)}/>
              </div>
              </>
            }
            />
            <Route path='/product/:id' element={<ProductPage listProduct={products}/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/profil' element={<Profil />}/>
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