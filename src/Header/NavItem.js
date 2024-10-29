import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NavItem extends React.Component {
  render() {
    const { to, children, action } = this.props;
    return(
      <li onClick={() => action()}>
        <Link className={css(styles.link)} to={to}>
          {children}
        </Link>
      </li>
    );
  }
}

NavItem.proptypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  action: PropTypes.func,
};

NavItem.defaultProps = {
  to: null,
  children: <></>,
  action: () => {},
};

const styles = StyleSheet.create({
  link: {
    color: 'gray',
    textDecoration: 'none',
    fill: 'black',
    stroke: 'black',
  }
});

export default NavItem;