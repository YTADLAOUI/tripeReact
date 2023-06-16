function Form(){
  const [description,setDescription]=useState('')
  const [opt,setopt]=useState(1)
  function handleSubmit(e){
    e.preventDefault();
    const newItem={description,quantity:opt,package:false,id:initialItems.length+1}
    console.log(newItem)
    initialItems.push(newItem);
    console.log(initialItems)
    setDescription('')
    setopt('1')
    }
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        what do you need for ur trip?
      </h3>
      <select value={opt} onChange={e=>setopt(Number(e.target.value))} >
        {Array.from({length : 20},(_,i)=> i + 1).map(num=>(
           <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text"placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button >ADD</button>
    </form>
  )
}