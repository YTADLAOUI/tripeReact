import {React, useState} from "react";
import Logo from './components/Logo.js'
import Form from './components/Form.js'
import PackingList from './components/PackingList.js'
import Stats from './components/status.js'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
export default function App(){
  const [items,setItems]=useState([]);
function hundleAddItem(item){
setItems([...items,item])
}
function onToggleItem(id){
setItems((items)=>(items.map((item) => {
  return item.id === id ? { ...item, package: !item.package } : item;
})))
}
function onDeleteItem(id){
  const confirmed= window.confirm('are you sure you want delate this item')
 if(confirmed)  setItems(items.filter((item)=>(item.id !== id)))
}
function onClearList(){
  const confirmed= window.confirm('are you sure you want delate all items?')
  if(confirmed) setItems([])
}

return(
<div className="app"> 
  <Logo/>
  <Form addItem={hundleAddItem} />
  <PackingList initialItems={items} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} onClearList={onClearList} />
  <Stats />
</div>
)
}
