import './App.css';
import {useState } from 'react';
import Header from './componets/header';
import Searchbar from './componets/searchbar';
import Todoitems from './componets/todoitems';
import React from 'react';
function App() {
    const [task,setTask]=useState([])
     const onDelete= (value)=>{
     setTask( task.filter((work)=> work.id!=value))
     }
  
  return (
    <div className="App">
             <Header/>
             <Searchbar setTask={setTask} />
             <Todoitems  task={task} onDelete={onDelete} />
    </div>
  );
}

export default App;
