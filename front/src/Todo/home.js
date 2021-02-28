
import React ,{useState,useEffect} from "react";

import {add,allTodo,remove} from "..//Controllers/addtodo"
import Layout from "../Design/layout"
import List from "../Design/List"


const Home =() =>{

    const [value,setValues] = useState({
        title:" ",
        error:"",
        success : false
    });
    const [todo,setTodo] =useState([]);
    const [err, setError] = useState(false);
    const {title,error,success} = value;

    //Get All Todo
    const loadAllTodo =() =>{
        allTodo().then(data =>{
            if(data.error){
                setError(data.error)
            }
            else{
                setTodo(data)
                
            }
        })
    }
    
    useEffect(() =>{
        loadAllTodo()
        
    },[todo])

  

    const handleTask = title => event =>{
     
        setValues({...value, error : false, [title]: event.target.value})
    }
    const onSubmit =() =>{

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

const onDelete = (taskId) =>{
    remove(taskId)
    .then(data =>{
        if(data.error)
        {
            console.log(data.error)
        }
        else{
            loadAllTodo(); 
        }
    }) 
}

const data =(event) =>{
    if(value.title === "")
    {
        alert("Please Enter somethings")
    }
    else{
        event.preventDefault();
        onSubmit();
    }
}
    
    return(
        <React.Fragment>
        
        <Layout title={title} method={handleTask("title")} onmy={data} place ="What need to be done"/>
         <div className="container">
     
        <div className="contain">
         {todo.map((task,index) => {
               
             return(
                 <List key={index} id ={task._id} my={task.title} delte={onDelete}/>
               
             )
         })}
             
         </div>
         </div>

        </React.Fragment>
    )
}
export default Home
