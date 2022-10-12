const express = require('express');
const app = express();
const routeTask = require('./routes/tasks')

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager app')
})
app.use('/api/v1/tasks', routeTask)


const port = 3000;

app.listen(port, console.log(`Serwer słucha.. ${port}`))