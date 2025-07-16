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
    <>
      <Header title="My todos list" searchBar={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
