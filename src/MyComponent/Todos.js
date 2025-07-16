import React from 'react'
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3" >Todos List</h3>
      {props.todos.length === 0 ? (
        <div style={{
          border: "2px solid black",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px",
          padding: "15px",
          background: "#eeeeee",
          margin: "20px auto",
        }}>
          No Todos to display
        </div>
      ) :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}

export default Todos;


