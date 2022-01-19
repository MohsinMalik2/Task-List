import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { TodoList } from './components/TodoList';

function App() {
  const deleteNow = (todo) =>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
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
    desc: "Go to the Cafe please"
  }

]);



  return (
      <div>
        <Header title="Today's Work" disable={true}/>
        <div className="container">
          <TodoList todos={todos} delete={deleteNow}/>
        </div>
        <Footer/>
      </div>
    
  );
}

export default App;
