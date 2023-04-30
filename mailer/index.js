const express = require('express');
const appRoute = require('./routers/route.js')
const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json());

/* Routers Settings */

app.use('/api',appRoute);


/* Ports Settings */


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})