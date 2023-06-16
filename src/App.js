import {React,useState} from "react";
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
return(
<div className="app"> 
  <Logo/>
  <Form/>
  <PackingList/>
  <Stats/>
</div>
)
}
