const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
//db
require('./db/mongoose');
//parser
app.use(bodyParser.json())
//routes
app.use('/api', apiRouter);
//serwer
app.listen(port, () => {
    console.log('Serwer słucha...')
})