import React from "react"
import  "./List.css"
const List =({my,delte,id}) =>{
    return(
        <React.Fragment>
         
                <div className="input">
                    
                     <input type="text" disabled value={my} ></input>
                    <button onClick={() => {delte(id)}}   type="button" >Delete</button>
                </div>
              
        </React.Fragment>
    )
}
export default List