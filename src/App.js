import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

function App() {
  const deleteNow = (todo) =>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
  };

  const submit = (e) =>{
    e.preventDefault();



    console.log("submitted form",e);
    // setTodos(todos.filter((e)=>{
    //     return e!==todo;
    // }));
  };
  const [todos, setTodos] = useState( [
    {
    sno: 1,
    title: "Market",
    desc: "Go to the market please"
  },{
    sno: 2,
    title: "Hotel",
    desc: "Go to the Hotel please"
  },
  {
    sno: 3,
    title: "Cafe",
    desc: "Go to the Official Cafe please"
  }

]);



  return (
      <div>
        <Header title="Today's Work" disable={true}/>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <TodoList todos={todos} delete={deleteNow}/>
            </div>
            <div className="col-md-4 bg-secondary my-5">
                <AddTodo submit={submit}/>
            </div>
          </div>
          
        </div>
        <Footer/>
      </div>
    
  );
}

export default App;
