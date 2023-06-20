export default function Item({item,onToggleItem}){
  // console.log(item.id,'hi')
  return (
    <il>
      <input
        type="checkbox"
        value={item.package}
        onChange={() => onToggleItem(item.id) }
        style={{marginRight:'13px'}}
      />

        <span style={item.package?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}
        </span>
        <button style={{ border:'none',backgroundColor:'transparent',fontSize:'2rem',padding:'2px'}}>❌</button>
    </il>)
  }