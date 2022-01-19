import React from 'react';

export const Todo = (props) => {
  return <div className='col-md-3'>
            <div className="card">
                    <div className="card-header">
                        Task # {props.todos.sno}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.todos.title}</h5>
                        <p className="card-text">{props.todos.desc}.</p>
                        <button className="btn btn-danger" onClick={()=>{props.delete(props.todos)}}>Delete</button>
                    </div>
                </div>
        </div>;
};
