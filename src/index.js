const express  = require('express');

const app = express();

app.get('/projects', (request, response) =>{
    return response.json([
        'Project 1',
        'Project 2'
    ]);
    //Always will return a JSON response.
});

app.post('/projects', (request, response) => {
    return response.json({message: "Data criated."});
});

app.put('/projects/:id', (request, response) => {
    return response.json({message: "Data refresed."});
});

app.delete('/projects/:id', (request, response) => {
    return response.json({message: "Data deleted."})
})

app.listen(3333, () => {
    console.log('The server is running 🚀');
});