import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/footer';
import AddTodos from './Components/AddTodos';
import { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  

function App() {
  // checking out local storage for persistent data 
  let initTodo;
  if (localStorage.getItem("todos")==null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    // initTodo = []
  }

  const addTodo = (title, desc) => {
    // console.log(title)
    // console.log(desc)
    let sno;
    if (todos.length == 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos, mytodo])
    console.log(todos)
    console.log(mytodo)


  }

  const onDelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, settodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  return (
    <>
    <Router>
      <Navbar searchbar={true} />
      <AddTodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
      </Router>

    </>
  );
}

export default App;
