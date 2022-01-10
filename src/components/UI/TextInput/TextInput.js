/* eslint-disable object-curly-newline */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
// import styles from './TextInput.module.css';

const TextInput = forwardRef(
  ({ type, classes, value, disabled, placeholder }, ref) => {
    const inputValue = useRef();

    useImperativeHandle(ref, () => ({
      getInputValue() {
        return inputValue.current.value;
      },
      setInputValue(value) {
        inputValue.current.value = value;
      },
    }));

    return (
      <input
        type={type}
        placeholder={placeholder}
        className={classes}
        defaultValue={value}
        disabled={!disabled}
        ref={inputValue}
      />
    );
  },
);

TextInput.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  classes: '',
  value: '',
  disabled: true,
  placeholder: '',
};

TextInput.displayName = 'Search';

export default TextInput;
