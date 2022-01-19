import React from 'react';
import { useState } from 'react';

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(title === "" || desc === ""){
            alert("Kindly add Description or title");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
      };
    return ( 
        <div className='my-5'>
            <h3>Add New Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
     );
  };
  