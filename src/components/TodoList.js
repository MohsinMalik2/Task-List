import React from 'react';
import { Todo } from './Todo';

export const TodoList = (props) => {
  return <div className='row my-5'>
      <h3 className='my-4'>Today's Tasks</h3>
        {props.todos.length === 0 ? "No Tasks for Today" : props.todos.map((todo)=>{
            return  <Todo todos={todo} key={todo.sno} delete={props.delete}/>
            
        })}
  </div>;
};
