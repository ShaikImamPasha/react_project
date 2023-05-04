function Pop(d){
    return(
        <>
        <div>
          <h1>{d.arg.id}</h1>
          <button onClick={d.fun}>close</button>
          </div>
        </>
    )
}
export default Pop;