import React, { Component, PropTypes } from 'react';
import styles from './Todo.scss'
class Todo extends Component {

  render() {
    const { id, text, user } = this.props
    return (
      <li className={styles.listItem}>
        <div className={styles.rowNumber}>{id}.</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.name}>{user}</div>
      </li>
    );
  }

}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default Todo;