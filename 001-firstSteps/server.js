const express = require('express');
const { json, urlencoded } = require('body-parser')
const cors = require('cors');
const registerRoutes = require('./routes/register')
const loginRoutes = require('./routes/login')
const usersRoutes = require('./routes/users')

const server = express();
server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));
//localhost:8000
server.use('/register', registerRoutes);
server.use('/login', loginRoutes);
server.use('/users', usersRoutes)

server.listen(8000, () => console.log('Serwer wystartował... '))
