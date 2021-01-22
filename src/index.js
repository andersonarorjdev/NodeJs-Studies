const express  = require('express');
const {uuid} = require('uuidv4')
const app = express();

/*
    kinds of params.
    query parms = ?name=value
    route parms = /:id
    Reques Body = Coming from JSON
*/

app.use(express.json());

const datas = [];

app.get('/projects', (request, response) =>{
    // const query = request.query;
    // console.log(query);

    return response.json(datas);
    //Always will return a JSON response.
});


app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    const projects = {
        id: uuid(),
        title,
        owner
    }

    datas.push(projects);
    return response.json(projects);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body; 
    
    const projectposition = datas.findIndex(project => project.id === id);

    if(projectposition < 0){
        return response.send('Not Found!');
    }
    const project = {
        id,
        title,
        owner
    }

    datas[projectposition] = project;
    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const projectposition = datas.findIndex(project => project.id === id );

    if(projectposition < 0){
        return response.send('Not found!');
    }

    datas.splice(projectposition);
    return response.send('Removido!');
})

app.listen(3333, () => {
    console.log('The server is running 🚀');
});