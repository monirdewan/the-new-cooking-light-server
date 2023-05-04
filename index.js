const express = require('express');

const app = express();

const port = process.env.PORT || 5000;




app.listen(port, ()=>{
    console.log(`the new cooking light is running on port:${port}`)
})