import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <>
    <div >
        <h4>{todo.sno}.&nbsp;
          {todo.title}</h4>
          <p> {todo.desc} </p>
        <button type="button" className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    </>
  )
}
