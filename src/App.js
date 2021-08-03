import React from 'react';
import ChatApp from './components/ChatApp/ChatApp';
import Todo from './components/Todo/Todo';
import './App.css';

 const App = () => {
    return (
        <div className="App">
            {/* <ChatApp /> */}
            <Todo />
        </div>
    )
}
export default App;