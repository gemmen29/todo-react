import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddNewTodo.module.css';
import TextInput from '../../UI/TextInput/TextInput';

const AddNewTodo = ({ onSubmit }) => {
  const todoRef = useRef();
  const AddNewItemHandler = () => {
    if (!todoRef.current.getInputValue()) {
      return;
    }

    const todo = {
      id: uuidv4(),
      title: todoRef.current.getInputValue(),
      completed: false,
    };
    todoRef.current.setInputValue('');
    onSubmit(todo);
  };
  return (
    <div className="input-group">
      <TextInput
        type="text"
        classes="form-control fs-5"
        placeholder="Add todo..."
        ref={todoRef}
      />
      <button
        type="button"
        className={`input-group-text ${styles['add-button']} btn btn-success fw-bold fs-3`}
        onClick={AddNewItemHandler}
      >
        +
      </button>
    </div>
  );
};

AddNewTodo.propTypes = {
  onSubmit: PropTypes.func,
};

AddNewTodo.defaultProps = {
  onSubmit: () => {},
};

export default AddNewTodo;
