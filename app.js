const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hellow world')
})

app.listen(port,()=>{
console.log('Hi vivek your server is listen on http://localhost:${port}');
})

