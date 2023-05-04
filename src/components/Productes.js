import {useEffect, useState} from 'react';
import Items from './Items.js';
import Loader from './loader/Loader.js';
import Popup from './Popup.js';
function Productes(){
     const[i,setItem]=useState([]);
     const[d,setData]=useState([]);
     const[p1,setPop]=useState(false);
     const[l,setLoader]=useState(true);
     useEffect(()=>{
fetch('https://react-7df59-default-rtdb.firebaseio.com/items.json')
.then((d)=>d.json())
.then((e)=>{
    var tr=e.map((e1,i)=>{
        return{
            ...e1,
            id:i
        }
    })
    console.log(tr);
    setLoader(false);
    setItem(tr);
})  
     },[])
function pop(){ 
    console.log("true");
    setPop(true);
    var r=document.getElementById("items");
    r.style="visibility:hidden";
}
function pop1(){
    console.log("call");
    setPop(false);
    var r1=document.getElementById("items");
    r1.style="visibility: visible"; 
}
     return(
        <>
         <div>
            { p1?<Popup pop2={pop1}></Popup>:console.log("false")
             }
        </div>
        <div className="items_fl1" id="items"> 
                {
            i.map((d)=>{
             return <Items key={d.id} pop11={pop}data={d}></Items>
            })
            }
            {l && <Loader/>}
        </div>
        </>
     )
}
export default Productes;