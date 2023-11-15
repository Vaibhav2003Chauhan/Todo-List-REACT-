import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {

  return (
    <>
      <div className="container todo-list">
        <h2 className="text-center my-3"> TodoList</h2>
        {props.todos.length == 0 ? <h2>No Todos to display</h2> :
          props.todos.map((todo) => {
            return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />);
          })}

      </div>

    </>
  );
};
