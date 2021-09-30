const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id: 1,  name: 'Kartik'},
    {id: 2,  name: 'Ram'},
    {id: 3,  name: 'Shyam'}
];

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/users', (req,res) => {
    res.send(users);

});

app.post('/save-export-config',(req,res) =>{
    //const {error} = validateCourse(req.body);  
    const {error} = checkJwt(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(users);
});

app.put('/save-export-config/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('The course with the given id was not found'); 
    
    //const {error} = validateCourse(req.body);  
    const {error} = checkJwt(req.body);  
    if(error) return res.status(400).send(error.details[0].message);
    
    user.name = req.body.name;
    res.send(user);
});

app.delete('/save-export-config/delete', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('The name with the given id was not found');

    const index = users.indexOf(course);
    courses.splice(index, 1); 

    res.send(user);
});



/*
app.post('/api/login',(req, res)=>{
    const users = [
    {id: 1,  name: 'Kartik'},
    {id: 2,  name: 'Ram'},
    {id: 3,  name: 'Shyam'}
];
jwt.sign({users}, 'secretKey', (err, token)=>{
    res.json({token});
});
});
*/

module.exports =  app;