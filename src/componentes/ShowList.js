import { useState } from "react";
import Pop from './Pop';
function ShowList(d){
    const[val,value]=useState(0);
    function inc(){
        value(val+1);
    }
    function dec(){
        if(val!=0) value(val-1);
    }
    return(<>
    <div>
    <div>
 <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
       <div>
       <div>
        </div>
        <h6>{d.arg.title}</h6>
        <h3>{d.arg.price}</h3>
        <button style={{width: "20px"}} onClick={dec}>-</button>
        {val}
        <button style={{width: "20px"}}onClick={inc}>+</button>
        <div></div>
        <button style={{backgroundColor:"#ed6161",borderRadius:"10px"}}onClick={d.fun}>more about</button>     
        </div>
    </div> 
    </div>
    </>)
}
export default ShowList;