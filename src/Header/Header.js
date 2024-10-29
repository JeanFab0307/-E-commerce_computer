import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NavItem from './NavItem';
import logo from '../assets/logo.png';
import {
  SvgHome,
  SvgCart,
  SvgProfil,
  SvgWishlist,
  SvgSearch} from '../SVG/svg';
import { connect } from 'react-redux';
import { displayCartDrawer } from '../actions/uiActionCreator';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {displayCartDrawer, isLoggedIn} = this.props;
    return (
      <div className={css(styles.header)}>
        <div>
          <Link to="/">
            <img className={css(styles.logo)} src={logo} alt='Logo' />
          </Link>
        </div>
        <div>
          <nav>
            <ul className={css(styles.navBar)}>
              <NavItem to='/' children={<SvgSearch />}/>
              <NavItem to='/' children={<SvgHome />}/>
              <NavItem to={isLoggedIn ? '/profil' : '/login'} children={<SvgProfil />} />
              <NavItem action={displayCartDrawer} to='' children={<SvgCart />}/>
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
    backgroundColor: 'white',
    borderBottom: '2px solid grey'
  },
  logo: {
    height: '75px'
  },
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

const mapDispacthToProps = {
  displayCartDrawer,
}

export default connect(mapStateToProps, mapDispacthToProps)(Header);
