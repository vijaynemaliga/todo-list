import TodoItem from "./todoitem";
import React from 'react';
export default function Todoitems({task,onDelete}){
     
      return(
        <div className="todo-list">
             {task.map((value)=> <TodoItem key={value.id}  value={value} onDelete={onDelete}/>)}
        </div>
      )
}