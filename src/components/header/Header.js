import '../../index.css';
function Header(){
    return(
        <div className="fl">
            <div>
               <span>Prodouct store</span>
            </div>
            <div>
             <input type="text" placeholder='Enter prodect name'></input>
            </div>
            <div>
                <span>card</span>
            </div>
        </div>
    )
}
export default Header;