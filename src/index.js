const express  = require('express');

const app = express();
app.get('/projects', (request, response) =>{
    return response.json({
        message: "Hello World!"
    });
    //Always will return a JSON response.
})

app.listen(3333);