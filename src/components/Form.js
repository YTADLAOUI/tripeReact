import { useState } from "react";

export default function Form({addItem}){
  const [description,setDescription]=useState('')
  const [opt,setopt]=useState(1)
  const [count,setCount]=useState(1)
  function handleSubmit(e){
    e.preventDefault();
    
    const newItem={description,quantity:opt,package:false,id:count}
    // console.log(newItem)
    addItem(newItem)
    setDescription('')
    setopt('1')
    setCount(co=>co+1);
    }
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        what do you need for ur trip?
      </h3>
      <select value={opt} onChange={e=>setopt(Number(e.target.value))} >
        {Array.from({length : 20},(_,i)=> i + 1).map(num=>(
           <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text"placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button >ADD</button>
    </form>
  )
}