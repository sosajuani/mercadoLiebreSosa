const express = require('express');
const app = express();
const path = require('path');

//carpeta publica
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'public/views/home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'public/views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname,'public/views/register.html')));
app.listen(process.env.PORT || 3000, () => console.log('servidor funcionando'));
