import { useState } from "react";

function Prodect(){
    const [data,updata]=useState([]);
    fetch('https://dummyjson.com/products')
    .then(k=>k.json())
    .then((o)=>{
        updata(o.products);
    })
    return(
       <>
       <div>
          {data.map((d)=>{
            return <div>{d.id}</div>
          })}
       </div>
       </>
    )
}
export default Prodect;