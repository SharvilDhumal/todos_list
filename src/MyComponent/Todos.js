import React from 'react'
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container min-vh-70">
      <h3 className=" my-3" >Todos List</h3>
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
          return (
            <React.Fragment key={todo.sno}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Todos;


