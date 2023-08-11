import { SiCachet} from "react-icons/si";
import React, { useState } from 'react';
export default function TodoItem({value,onDelete}){
    const [colors,setColors]=useState({backgroundColor:'RED'})
    const handleClick1=()=>{
           if(colors.backgroundColor=='RED')
            setColors({backgroundColor:'green'})
            else
            setColors({backgroundColor:'RED'})
    }
   

    return  (        
                    <div className="todo-item">
                        <li className="task-descrption">{value.title}</li>
                      <div className="buttons">
                        <button className="button-item" onClick={handleClick1} style={colors}> <SiCachet/> </button>
                        <button className="button-item button-item-2" onClick={()=>onDelete(value.id)}>DEL</button>
                      </div>
                    </div> 
    ) 
}