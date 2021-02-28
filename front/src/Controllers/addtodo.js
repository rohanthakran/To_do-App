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