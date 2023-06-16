function Item({item}){
  return (
    <il>
        <span style={item.packed?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}
        </span>
        <button style={{color:'red', border:'none',backgroundColor:'transparent',fontSize:'3rem'}}>&times;</button>
    </il>)
  }