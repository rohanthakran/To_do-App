const express = require("express");
const {createToDo,remove,signup,one,getTodoById,getTodo,getAllTask,updatetask} = require("../controllers/todo")

const router = express.Router();
router.param("todoId",getTodoById);

router.get("/",(req,res) =>{
    res.send("This Works")
})

router.get("/todo/:todoId", getTodo)
router.get("/alltodo", getAllTask)
router.put("/todo/:todoId",updatetask)

//delete route
router.delete("/todo/:todoId",remove)

router.post('/task', signup);
router.post('/one', one);



module.exports = router;