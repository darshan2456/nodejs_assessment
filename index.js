const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());

const schoolRoutes=require('./routes/schools');
app.use('/',schoolRoutes);

const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})

