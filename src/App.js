import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // const [title, setTitle] = useState('');
  console.log(todos);
  useEffect(() => {
    db.collection('todos').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      // todoTitle: title,
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // setTitle('');
    setInput('');

  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel >Write a Todo</InputLabel>
          <Input placeholder="Enter the description" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary">
          Add Todo
         </Button>
        <ul>
          {
            todos.map(todo =>
              (<Todo key={todo.id} todo={todo} />)
            )
          }
        </ul>
      </form>
    </div>
  );
}

export default App;
