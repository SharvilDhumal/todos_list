import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";
import { useState } from 'react';

import PropTypes from 'prop-types'

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way in  react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log(`I am adding this todo`, title, desc);

    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done "
    },
    {
      sno: 2,
      title: "Complete the Javascript Course",
      desc: "Complete the JS Course till the end of the month"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "Go the GYM Every day"
    },
  ]);


  return (
    <div className="app-container">
      <Header title="My todos list" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
