import React, { useState } from 'react';

const Todo=()=> {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(input);
        setTodo([...todo, input]);
        
        console.log(todo);
        setInput('');

    }

    const deleteToDo=(key)=>{
        console.log(key);
        setTodo(todo.filter((data,index)=>index !== key));
    }

    return (
        <div>
            <h2>To Do work here..!!</h2>

            <form onSubmit={handleSubmit}>
                    <input placeholder="Type a ToDo work" value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button type="submit"> SEND</button>
                </form>

                <ul>
                    
                   {todo.map((data,index)=>(
                       <li key={index}>{data}<i className="fa fa-trash-alt" onClick={()=>deleteToDo(index)} ></i></li>
                   ))}

                </ul>
        </div>
    )
}
export default Todo;