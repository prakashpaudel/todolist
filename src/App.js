import React, { Component } from 'react';
import styles from './App.scss';
import TodoList from './todos/TodoList'
import Footer from './footer/Footer'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>
          Open Friday Todos
        </h1>
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
