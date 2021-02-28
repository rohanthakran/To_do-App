import React from "react"
import  "./List.css"
const List =({my}) =>{
    return(
        <React.Fragment>
         <div className="container">
                <div className="input">
                    
                     <input type="text" disabled value={my} ></input>
                    <button  type="button" >Delete</button>
                </div>
                </div>
        </React.Fragment>
    )
}
export default List