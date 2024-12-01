const express=require('express');
const app=express();
const port = 3000;
const apiRouter= require('./router/router');


app.use(apiRouter);
// app.get('/',(req,res)=>{
//     res.send('welcome')
// })
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});