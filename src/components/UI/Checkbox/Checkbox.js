/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Checkbox.module.css';

const Checkbox = ({ type, classes, checked, onChange }) => (
  <input
    type={type}
    onChange={onChange}
    className={classes}
    checked={checked}
  />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  type: 'text',
  classes: '',
  checked: false,
  onChange: () => {},
};

export default Checkbox;
