import Item from "./item"
export default function PackingList({initialItems,onToggleItem,onDeleteItem,onClearList}){
 
  return (
  <div className="list">
      <ul >{initialItems.map((item)=>(
        <Item item={item} key={item.id} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem}/>
      ))}
    </ul>
    <button onClick={onClearList}>Clear list</button>
  </div>
  )
}