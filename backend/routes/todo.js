const express = require("express");
const {createToDo,signup,one,getTodoById,getTodo,getAllTask,updatetask} = require("../controllers/todo")

const router = express.Router();
router.param("todoId",getTodoById);

router.get("/",(req,res) =>{
    res.send("This Works")
})

router.get("/todo/:todoId", getTodo)

router.put("/todo/:todoId",updatetask)

router.post('/task', signup);
router.post('/one', one);



module.exports = router;