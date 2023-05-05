const Pop=({fun,chi})=>{
  return(
    <>
    <div>{console.log(chi)}</div>
    <button onClick={fun}>close</button>
    </>
  )
}
export default Pop;