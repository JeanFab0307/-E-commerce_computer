import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
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
  }


  render() {
    return (
      <div className={css(styles.app)}>
        <Header />
        <Routes>
          <Route path='/' 
            element={
              <div className={css(styles.card)}>
                <ProductsPreview listProducts={this.listProducts}/>
              </div>
            }
            />
          <Route path='/profil' element={<Login />}/>
        </Routes>
        
        <Footer />
      </div>
  );
}
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    padding: '20px 40px'
  },
});

export default App;