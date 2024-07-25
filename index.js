const express = require("express");

const app = express();

app.use(cors())



app.get('/hello',(req,res)=>{
res.json({"message":"Get Method"})
})

app.post('/', (req,res)=>{
    res.json({"message":"Get Method"})

})

app.delete('/',(req,res)=>{
    res.send("hello prithvi")
})

app.patch('/', (req,res)=>{
    res.send("hello alka")
})
app.listen(5000,function(){
    console.log("Server started")
})
