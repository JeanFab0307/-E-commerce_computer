import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={css(styles.app)}>
        <Header />
        <Routes>
          <Route path='/' element={
            <div className={css(styles.body)}>
            Body
          </div>
          }></Route>
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
  body: {
    height: '300px',
  },
});

export default App;