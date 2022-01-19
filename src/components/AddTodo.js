import React from 'react';

export const AddTodo = (props) => {
    
    return ( 
        <div className='my-5'>
            <h3>Add New Task</h3>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Task Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
     );
  };
  