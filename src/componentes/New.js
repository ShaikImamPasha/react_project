import ShowList from "./ShowList";
import { useEffect, useState } from "react";
import Loading from "./Loa";
import Show from "./ShowList";

function New(){
    const [data,updata]=useState([]);
    const [l,loading]=useState(true);
    useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(k=>k.json())
    .then((o)=>{
        updata(o.products);
        loading(false);
    },[])
} 
    )
    return(
       <>
       <header>
           <h1>bookstore</h1>
           <input type="text"></input>
           <h3>cart</h3>
       </header>
       <div>
         {l&&<Loading></Loading>}
         <div class="Showlist">
         {data.map((e)=>{
            return <ShowList arg={e}></ShowList>
         })}  
         </div>     
       </div>
       </>
    )
}
export default New;