/* eslint-disable object-curly-newline */
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

const TextInput = forwardRef(
  ({ type, classes, value, disabled, placeholder, onEdit }, ref) => {
    const inputValue = useRef();

    const [isDisabled, setIsDisabled] = useState(disabled);

    useImperativeHandle(ref, () => ({
      getInputValue() {
        return inputValue.current.value.trim();
      },
      setInputValue(value) {
        inputValue.current.value = value;
      },
    }));

    const clickHandler = () => {
      setIsDisabled((pre) => !pre);
    };

    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        e.target.blur();
      }
    };

    const blurHandler = (e) => {
      setIsDisabled((pre) => !pre);
      onEdit(e.target.value);
    };

    return (
      <>
        {placeholder === '' && (
          <input
            type={type}
            placeholder={placeholder}
            className={`${classes} ${!isDisabled && styles.disabled}`}
            defaultValue={value}
            ref={inputValue}
            onClick={clickHandler}
            onKeyDown={keyDownHandler}
            onBlur={blurHandler}
          />
        )}
        {placeholder === 'Add todo...' && (
          <input
            type={type}
            placeholder={placeholder}
            className={`${classes}`}
            ref={inputValue}
          />
        )}
      </>
    );
  },
);

TextInput.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onEdit: PropTypes.func,
};

TextInput.defaultProps = {
  type: 'text',
  classes: '',
  value: '',
  disabled: true,
  placeholder: '',
  onEdit: () => {},
};

TextInput.displayName = 'Search';

export default TextInput;
