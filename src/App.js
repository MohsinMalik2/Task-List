import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import About from './components/About';



function App() {
  let initTodo = ""
  if(localStorage.getItem("todos") === null){
    initTodo=[]
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"))
  }
  const deleteNow = (todo) =>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
  };

 const addTodo = (title, desc) =>{

  console.log("Get well soon",title,desc);
  let sno = "";
  if(todos.length !== 0){
     sno =  todos[todos.length-1].sno + 1;
  }
  else{
     sno =   1;
  }
    const myTodo = {
      sno: sno,
      title:title,
      desc: desc
    }
    setTodos([...todos,myTodo])

 }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos]);
   

  return (
    <div>
    <Router>
     
        <Header title="Today's Work" disable={true}/>
        <div className="container">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <div className="row">
                  <div className="col-md-8 my-3">
                      <TodoList todos={todos} delete={deleteNow}/>
                  </div>
                  <div className="col-md-4  ">
                    <div className='card bg-outline-info my-5'>
                      <div className='card-body'>
                          <AddTodo addTodo={addTodo}/>
                      </div>
                    </div>
                      
                  </div>
                </div>
            </Route>
          </Switch>
        </div>
        <Footer/>
      
    </Router>
    </div>
  );
}

export default App;
