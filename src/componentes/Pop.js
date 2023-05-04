function Pop(d){
    return(
        <>
        <div class="Pop">
          <h1>{d.arg.price}</h1>
          <button onClick={d.fun}>close</button>
          </div>
        </>
    )
}
export default Pop;