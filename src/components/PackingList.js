import { useState } from "react"
import Item from "./item"
export default function PackingList({initialItems,onToggleItem,onDeleteItem,onClearList}){
 const [sortBy,setSortBy]=useState('input')
let sortedItems;

 if(sortBy=='input') sortedItems=initialItems;
 if(sortBy=="description") sortedItems=initialItems.slice().sort((a, b) => a.description.localeCompare(b.description));
  return (
  <div className="list">
      <ul >{sortedItems.map((item)=>(
        <Item item={item} key={item.id} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem}/>
      ))}
    </ul>
    <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
  </div>
  )
}