const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
//routes
app.use('/', apiRouter);
//serwer
app.listen(port, () => {
    console.log('Serwer słucha...')
})