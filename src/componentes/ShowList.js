import { useState } from "react";
import Pop from './Pop';
function ShowList(d){
    const[pop,popupdate]=useState(false);
    function clk(){
       popupdate(!pop);
       console.log(pop);
    }
    return(<>
    <div>
 <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
       <div>
       <div>
        </div>
        <h3>{d.arg.price}</h3>
        <button onClick={clk}>more detailes for click here</button>
        {pop&&<Pop fun={clk} arg={d.arg}></Pop>}        
        </div>
    </div>
    </>)
}
export default ShowList;