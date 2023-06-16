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