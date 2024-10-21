import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { NavItem } from './NavItem';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.header)}>
        <div>
          <Link to="/">
            <img className={css(styles.logo)} src='' alt='Logo' />
          </Link>
        </div>
        <div>
          <nav>
            <ul className={css(styles.navBar)}>
              <NavItem link='/' name='Home'/>
              <NavItem link='/profil' name='Profil'/>
              <NavItem link='/cart' name='Cart'/>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    textAlign: 'center',
    width: '400px',
    paddingLeft: '0px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    Color: 'black',
    borderBottom: 'solid 2px grey',
  },
  logo: {
    height: '75px'
  }
});

export default Header;