import { useState  } from "react";
function Items(props){ 
    var[n,setNumber]=useState(0);
    var[popv,setPop]=useState(false);
    function inc(){
    setNumber(n++);
    }
    function dec(){
        if(n<0){
            return;
        }
        setNumber(n--);
    }
    return(
        <>
 <div> 
    <div class="items_fl">
          <img  style={{width:'200px',hight:'200px'}} src={'https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop/en_AU/product/90444/1/resized_300x300.png'}alt="no internet"></img>
             <span>{props.data.price}</span>
               <del>{props.data.discountedPrice}</del> 
                <span>{props.data.title}</span>
              <div>
                {n<=0? <button className="b_v" onClick={inc}>Add to card</button>
                :
                 <>
                 <button className="b_v" onClick={inc}>+</button>
                     <span>{n}</span>  
                 <button className="b_v" onClick={dec}>-</button>
                 </>
                 }
                 <button onClick={props.pop11()} >More details</button>
             </div>
           </div>
       </div>
             </>
    )
}
export default Items;