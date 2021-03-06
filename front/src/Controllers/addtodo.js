import {API} from "../backend";

export const add = todo =>{
   return fetch(`${API}/task`, {
       method: "POST",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(todo)
     })
       .then(response => {
         return response.json();
       })
       .catch(err => console.log(err));

};

export const allTodo = () =>{
 
      return fetch(`${API}/alltodo`,{
        method:"GET"
      })
      .then(response =>{
        return response.json()
      })
      .catch(err => console.log(err))
}
export const remove = (todoId) =>{
  return fetch(`${API}/todo/${todoId}`,{
    method:"DELETE"
  })
  .then(response =>{
    return response.json()
  })
  .catch(err => console.log(err))
}