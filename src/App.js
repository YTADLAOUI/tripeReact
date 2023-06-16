
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
function Form(){
  return(
    <div className="add-form">
      <h3>what do oyu nedd for ur trip?</h3>
    </div>
  )
}
function PackingList(){
  return (
  <div className="list">
      <ul >{initialItems.map((item)=>(
        <Item item={item}/>
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