import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export const NavItem = ({ link, name }) => {
  return(
    <li>
      <Link className={css(styles.link)} to={link}>
        {name}
      </Link>
    </li>
  )
};

const styles = StyleSheet.create({
  link: {
    color: 'gray',
    textDecoration: 'none'
  }
});