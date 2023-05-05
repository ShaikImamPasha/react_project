import ShowList from "./ShowList";
import { useEffect, useState } from "react";
import Loading from "./Loa";
import Show from "./ShowList";
import Pop from "./Pop";
function New(){
    const [modaldata,modaldataupdate]=useState([]);
    const [data,updata]=useState([]);
    const [l,loading]=useState(true);
    const [modal,modalupdate]=useState(false);
    useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(k=>k.json())
    .then((o)=>{
        updata(o.products);
        loading(false);
    },[])
} 
    )
    function modal_fun(){
        modalupdate(!modal);
    }
    return(
       <>
       <header>
           <h1>bookstore</h1>
           <input type="text"></input>
           <h3>cart</h3>
       </header>
       <div>{modal && <Pop 
       fun={modal_fun}>
        </Pop>}</div>
       <div>
         {l&&<Loading></Loading>}

         <div id="Showlist">
         {data.map((e)=>{
            return <ShowList fun={modal_fun} arg={e}></ShowList>
         })}  
         </div>     
       </div>
       </>
    )
}
export default New;