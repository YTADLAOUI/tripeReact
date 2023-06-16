
import {React,useState} from "react";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
export default function App(){
return(
<div className="app"> 
<Logo/>
<Form/>
<PackingList/>
<Stats/>

</div>
)
}



function Logo(){
  return <h1>Far Away </h1>
}
function handleSubmit(e){
e.preventDefault();

}
function Form(){
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        what do you need for ur trip?
      </h3>
      <select>
        {Array.from({length : 20},(_,i)=> i + 1).map(num=>(
           <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text"placeholder="Item..."></input>
      <button >ADD</button>
    </form>
  )
}
function PackingList(){
  return (
  <div className="list">
      <ul >{initialItems.map((item)=>(
        <Item item={item} key={item.id} />
      ))}
    </ul>
  </div>
  )
}
function Item({item}){
return (
  <il>
      <span style={item.packed?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}
      </span>
      <button style={{color:'red', border:'none',backgroundColor:'transparent',fontSize:'3rem'}}>&times;</button>
  </il>)
}
function Stats(){
  return(
    <footer className="stats">
      <em>You have x items on your list, and you already packes X (X%)</em>
    </footer>
  )
}