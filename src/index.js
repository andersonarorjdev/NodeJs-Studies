const express  = require('express');

const app = express();

/*
    kinds of params.
    query parms = ?name=value
    route parms = /:id
    Reques Body = Coming from JSON
*/

app.use(express.json());

app.get('/projects', (request, response) =>{
    const query = request.query;
    console.log(query);

    return response.json([
        'Project 1',
        'Project 2'
    ]);
    //Always will return a JSON response.
});

app.post('/projects', (request, response) => {
    const {title, name} = request.body;
        console.log(title, name)
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    console.log(params, requestbody);

    return response.json({message: "Data refresed."});
});

app.delete('/projects/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({message: "Data deleted."})
})

app.listen(3333, () => {
    console.log('The server is running 🚀');
});