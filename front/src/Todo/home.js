
import React ,{useState} from "react";

import {add} from "..//Controllers/addtodo"
import Layout from "../Design/layout"

const Home =() =>{

    const [value,setValues] = useState({
        title:" ",
        error:"",
        success : false
    });
    const {title,error,success} = value;

    const handleTask = title => event =>{
        setValues({...value, error : false, [title]: event.target.value})
    }
    const onSubmit =(event) =>{
            event.preventDefault();
            setValues({...value,error : false,});
            add({title})
            .then(data =>{
                if(data.error) {
                    setValues({ error :data.error} );
                }
                else {
                    setValues({...value,title:"",error:"",success : true})
                }
            })
            .catch(console.log("Error in saving data"))
    }
    const sucessMessage = () =>{
  return(      <div 
        style={{display: error ? "" : "none"}}>
         aerere
        </div>)
    }
    return(
        <React.Fragment>

        <Layout value={title} onChange={handleTask("title")} onClick={onSubmit}/>
    
           <h1>This A title</h1>
         
          <form>
          <label for="task">Add Task</label>
          <input type="text" id="task" value={title} required onChange={handleTask("title")} ></input>
                <h1>{value.title}</h1>
                {sucessMessage()}
              <button onClick={onSubmit}>Submit</button>
          
          </form>
          <p>{JSON.stringify(value)}</p>
         
           
        </React.Fragment>
    )
}
export default Home