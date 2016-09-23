import React, { Component } from 'react';
import styles from './Footer.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.text}>
          Made with {'<3...'}
        </p>
        <p className={`${styles.text}
                       ${styles.secret}`}>
          ...last night at 12am
        </p>
      </div>
    );
  }
}

export default App;
