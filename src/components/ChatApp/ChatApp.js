
import React, { useEffect, useState } from 'react';
import { Firebase } from '../../firebase/config';

const ChatApp=()=> {

    const [msg, setMsg] = useState([]);
    const [input, setInput] = useState(msg.input);
 


   const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(input);
    // const allMsg = msg;
    // allMsg.push(input);
    Firebase.firestore().collection('messages').add({
        text:input
    })
    setMsg([...msg, input]);
    console.log(msg);
    setInput('');
   }

   useEffect(()=>{
       const fetchData = async ()=>{
            const db= Firebase.firestore()
            const data = await db.collection('messages').get()
            setMsg(data.docs.map(obj=>({...obj.data(),id: obj.id})))
            
       }
       fetchData()
   },[]);

   const deleteMsg =(index)=>{

    const db =Firebase.firestore()
    db.collection('message').doc(msg.id).delete()
    console.log(index);
    setMsg(msg.filter((data,index)=>index !== index))
    // const allMsg= msg;
    // allMsg.splice(index,1);
    // setMsg(allMsg);
   }
        return (
            <div>
               <h1> Chat here..!</h1>

               <ul>
                
                   {msg.map((data,index)=>(
                       <li key={index}>{data.text} <i className="fa fa-trash-alt" onClick={()=>deleteMsg(index)}></i></li>
                   ))}
                 
                </ul>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Type a mesage" value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button type="submit"> SEND</button>
                </form>
            </div>
        )
    }

export default ChatApp;