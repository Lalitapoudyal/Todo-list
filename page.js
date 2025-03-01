"use client"
import { ClientPageRoot } from "next/dist/client/components/client-page";
import React, { useState } from "react";

const page = () =>{
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)


  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)

  }
  let renderTask = <h2>No Task Availabe!</h2>

if(mainTask.length>0){
  renderTask=mainTask.map((t, i) => {
    return(
      <li key={i} className="flex items-center justify-between">
        <div className="flex justify-between mb-5 w-2/3">
          <h5 className="text-lg font-medium "> {t.title}</h5>
          <h6 className="text-lg font-medium ">{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }
        } className="bg-red-500 rounded font-semibold text-white py-2 mb-5">Delete</button>
      </li>
    )
  })
}
  return (
    <>
    <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">Lalita's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className="text-xl border-zinc-800 border-2 m-5 px-3 p-2" placeholder="Enter Task Here!" value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input>
      <input type="text" className="text-xl border-zinc-800 border-2 m-5 px-3 p-2" placeholder="Enter Description Here!" value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      <button className="bg-black text-white px-3 p-2 text-2xl font-bold rounded m-5">Add Task</button>
    </form>
    <hr/>
    <div className="p-8 bg-neutral-600 text-white font-sans m-2">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page