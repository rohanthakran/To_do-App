import React from "react"
import "./layout.css"
const layout =() =>{
    return(
        <React.Fragment>

            <div className="container">
            <h1>The Todo </h1>
                <div className="input">
                    <input type="text" placeholder="What need to be done"></input>
                    <button type="button">Add</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default layout;