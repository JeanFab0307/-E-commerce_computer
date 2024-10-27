import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CartDrawer from '../Cart/CartDrawer';
import Cart from '../Cart/Cart';
import ProductsPreview from '../Products/ProductPreview';
import cardImage from '../assets/pc.jpeg'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.listProducts = [
      {id: '1', name: 'Asus Rog', img: cardImage, cpu: 'core i7', storage: 512, memType: 'SSD', ram: 32, price: 2000},
      {id: '2', name: 'Acer', img: cardImage, cpu: 'core i7', storage: 1024, memType: 'SSD', ram: 8, price: 1500},
      {id: '3', name: 'Hp pavilion', img: cardImage, cpu: 'core i7', storage: 100, memType: 'SSD', ram: 8, price: 800},
      {id: '4', name: 'MacBook', img: cardImage, cpu: 'core i7', storage: 1000, memType: 'SSD', ram: 8, price: 1900},
    ];

    this.toogleDisplayCart = this.toogleDisplayCart.bind(this)

    this.state = {
      isLoggedIn: false,
      displayDrawer: false,
    }
  }

  toogleDisplayCart() {
    this.setState({displayDrawer: !this.state.displayDrawer})
  }

  render() {
    const {
            displayDrawer,
            hideCartDrawer,
            isLoggedIn,
          } = this.props;

    return (
      <div className={css(styles.app)}>
        <Header/>
        {displayDrawer &&
        <div className={css(styles.cart)}>
          <CartDrawer hideCartDrawer={hideCartDrawer}/>
        </div>}
        <div className={css(styles.body)}
        onClick={ displayDrawer ? (hideCartDrawer) : (() => {})}>
          <Routes>
            <Route path='/' 
            element={
              <>
              <div className={css(styles.card)}>
                <ProductsPreview listProducts={this.listProducts}/>
              </div>
              </>
            }
            />
            <Route path='/login' element={<Login />}/>
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

export default App;