const express = require('express')
const { readFile } =require ('fs');
const app = express()

app.get('/', function (req, res) {
    readFile('html/index3.html','utf8',(err ,html)=>{
        if(err)
        res.status(500).send("Error");
    res.send(html);
    })
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000");
});
