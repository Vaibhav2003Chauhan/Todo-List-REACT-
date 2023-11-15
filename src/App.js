import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/footer';
import AddTodos from './Components/AddTodos';
import { useState } from 'react';

function App() {
  const addTodo=(title,desc)=>{
    // console.log(title)
    // console.log(desc)
    let sno;
    if(todos.length==0)
    {
      sno=0
    }
    else{
      sno = todos[todos.length - 1].sno + 1
    }
    
    const mytodo= {
      sno:sno,
      title : title,
      desc : desc,
    }
    settodos([...todos,mytodo])
    console.log(todos)
    console.log(mytodo)
    
 
  }

  const onDelete = (todo) => {
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, settodos] = useState([
  ])
  return (
    <>
      <Navbar searchbar={true} />
      <AddTodos addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
