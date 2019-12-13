const express = require('express')

const app = express()

app.use(
    (date = (req, res, next) => {
      let time = new Date().getHours;
      time > 17 || time < 8
        ? res.send("<h1> The office is not open now</h1>")
        : next();
    })
  );
  

app.use(express.static(__dirname + '/public'))

app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})


app.listen(3000,(err)=>{
    if(err) console.log('server is not running') 
    else console.log('server is running')
    
})