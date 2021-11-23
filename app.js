const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//carpeta publica
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'public/views/home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'public/views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname,'public/views/register.html')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
