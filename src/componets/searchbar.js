import { useState } from "react";
import React from 'react';
export default function Searchbar({setTask}){
    const[value,setValue]=useState('')
    const handleOnClick=(e)=>{
        e.preventDefault()
        const work={
            id:Math.random(),
            title:value
        }
        setTask((task)=>[...task,work])
        setValue('')
    }
    return(
        <form className="searchbar" onSubmit={handleOnClick}>
            <input type="text" className="searchbar-input" placeholder="Search" value={value} onChange={(e)=>setValue(e.target.value)} required/>
            <button className="searchbar-submit"type="submit">ADD TASK</button>
        </form>
    )
}