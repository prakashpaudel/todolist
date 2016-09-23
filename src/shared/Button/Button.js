import React, { Component } from 'react';
import styles from './Button.scss';

class App extends Component {
  render() {
    return (
      <a href={linkTo} style={styles.button}>{text}</a>
    );
  }
}

export default App;
