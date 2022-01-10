/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './DisplayTodo.module.css';
import TextInput from '../../UI/TextInput/TextInput';
import Checkbox from '../../UI/Checkbox/Checkbox';

const DisplayTodo = ({ todo, onChangeCheck, onDelete, onEdit }) => {
  const ChangeCheckHandler = () => {
    onChangeCheck(todo.id);
  };
  const deleteHandler = () => {
    onDelete(todo.id);
  };
  const editHandler = (newText) => {
    onEdit(todo.id, newText);
  };
  return (
    <div className="input-group">
      <span className="input-group-text bg-light fw-bold fs-4">
        <Checkbox
          type="checkbox"
          classes={`form-check-input fs-5 ${styles['pointer-button']}`}
          checked={todo.completed}
          onChange={ChangeCheckHandler}
        />
      </span>
      <TextInput
        type="text"
        classes={`form-control fs-5" ${
          todo.completed && styles['line-through']
        }`}
        value={todo.title}
        disabled={false}
        onEdit={editHandler}
      />
      <button
        type="button"
        className={`input-group-text ${styles['pointer-button']} btn btn-danger fw-bold fs-4`}
        onClick={deleteHandler}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

DisplayTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onChangeCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

DisplayTodo.defaultProps = {
  todo: PropTypes.shape({
    id: '',
    title: 'Task Title',
    completed: false,
  }),
  onChangeCheck: () => {},
  onDelete: () => {},
  onEdit: () => {},
};

export default DisplayTodo;
