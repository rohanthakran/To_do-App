
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const cookieParser  = require("cookie-parser");
const cors = require('cors');


//Routes
const TodoRoute = require("./routes/todo")


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
const port = process.env.PORT || 8000;

const CONNECTION_URL ="mongodb+srv://Rohan:Snowden@cluster0.j1tj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get("/", (req,res) =>{
    return res.send("Hello world")
})
// mongoose.connect(CONNECTION_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then( ()=>{
//     console.log("Db is connected");
// })
mongoose.connect(CONNECTION_URL , 
    { useNewUrlParser: true, 
        useCreateIndex: true,
     useUnifiedTopology: true })
    .then(() => console.log("Db Connected"))
    .catch((err) => console.log(err))

//MyRoute
app.use("/api",TodoRoute);


app.listen(port, () => console.log(`listing on ${port}`))