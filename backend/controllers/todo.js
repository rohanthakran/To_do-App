const Todo = require("../model/todo")
exports.getTotod = (req,res) =>{
    try{
        const post = Todo.find();
        res.status(200).json(post);
    }
    catch(err) {
        res.status(404).json({message : error .message});
    }
}
exports.signup = (req, res) => {
    const user = new Todo(req.body);
    user.save((err, user) => {
      if (err) {
        console.log(err)
        return res.status(400).json({
          err: "NOT able to save user in DB"
        });
      }
      res.json(user);
    });
  };
// exports.createToDo = (req,res) =>{
//     const todo = new Todo(req.body);
//     todo.save().then(() =>{
//         console.log(todo)
//         res.json(todo);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
// }
// exports.signup= (req,res) =>{
  
//     const user= new User(req.body);
  
//     user.save().then( ()=>{
        
//         console.log(user)
//         console.log(req.body.name);
//         res.json(user);
//     }).catch( (error) =>{
//         console.log(error);
//     })
    
// };
exports.one =(req,res) =>{
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
}

exports.getTodoById = (req,res,next,id) =>{
    Todo.findById(id).exec((err,todo) =>{
        if(err || !todo)
        {
            return res.status(400).json({
                erro : "No user was Found in DB"
            })
        }
        req.task = todo;
        next();
    })
}
exports.getTodo = (req,res) =>{
    return res.json(req.task);
}
exports.remove = (req,res) =>{
    const task = req.task;
    task.remove((err,task) =>{
        if(err) {
            return res.status(400).json({
                errror :"Failed to delete this cate"
            })
        }
        res.json({
            message : "SuccessFull delte"
        })
    })
}

exports.getAllTask = (req,res) =>{
    Todo.find().exec((err,todos) =>{
        if(err || !todos){
            return res.status(400).json({
                errror: " No data Found"
            })
        }
        res.json(todos)

    })
   
}
exports.updatetask = (req,res) =>{
    Todo.findByIdAndUpdate({
        _id : req.task._id
    },
    {$set: req.body},
    {new: true,useFindAndModify: false}, 
    (error,task) =>{
        if(error || !task){
            return res.status(400).json({
                error :"Not able to Update"
            })
        }
        res.json(task)
    })
}