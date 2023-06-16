export default function Item({item}){
  console.log(item.package)
  return (
    <il>
      <input
        type="checkbox"
        value={item.package}
        // onChange={() => onToggleItem(item.id)}
      />
        <span style={item.package?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}
        </span>
        <button style={{color:'red', border:'none',backgroundColor:'transparent',fontSize:'3rem'}}>&times;</button>
    </il>)
  }