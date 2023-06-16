import Item from "./item"
export default function PackingList({initialItems}){
  return (
  <div className="list">
      <ul >{initialItems.map((item)=>(
        <Item item={item} key={item.id} />
      ))}
    </ul>
  </div>
  )
}