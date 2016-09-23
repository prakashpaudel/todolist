import React from 'react';
import styles from './TodoList.scss'

import Todo from './Todo'

const todos = [
  {
    id: 1,
    text: "9am: Hello...it's me",
    user: "Adele"
  },
  {
    id: 2,
    text: "10: show this shitty app",
    user: "Prakash"
  },
  {
    id: 3,
    text: "11: 'Draw some shit'",
    user: "Max"
  },
  {
    id: 4,
    text: "12pm: Town Hall wit squad",
    user: "Matt"
  },
  {
    id: 5,
    text: "1: PIZZZZZZZAAAAAAAAA",
    user: "Ryan"
  },
  {
    id: 6,
    text: "2: Food coma. Sleep like a Panda.",
    user: "Eleni"
  },
  {
    id: 7,
    text: "3: Start drinking and don't stop",
    user: "Alcoholics (you know who you are)"
  },
  {
    id: 8,
    text: "4: don't let things get weird...again",
    user: "Sarah"
  },
  {
    id: 9,
    text: "5: get out while I can",
    user: "Indy"
  },
  {
    id: 10,
    text: "6: Don't crash the divvy",
    user: "Zack"
  },
]

class TodoList extends React.Component {

  render() {
    return (
      <ul className={styles.list}>
        { todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }

}

export default TodoList;