import React from "react"
import "./layout.css"
const layout =({title,method,onmy,place}) =>{
    return(
        <React.Fragment>

            <div className="container">
            <h1>Add You all todo</h1>
            
                <div className="input1">
                    <input type="text" value ={title} onChange ={method}  placeholder={place}></input>
                    <button onClick ={onmy} type="button">Add</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default layout;