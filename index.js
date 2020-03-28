const express = require('express')
const app = express()
const server = require('http').createServer(app);

const bodyParser = require('body-parser')
app.use(bodyParser());


//For JWT
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Need to be store at ENV variable
const config = {secret:'alibaba'}

app.post('/register', function (req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    console.log(hashedPassword)

    var token = jwt.sign({ id: req.body.id }, config.secret, {
        expiresIn: 30 // expires in 30 sec 
    });
    res.status(200).send({ auth: true, token: token });
});

app.get('/login', function (req, res) {
    
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);
    });
});

server.listen(process.env.PORT || 8080,()=>{
    console.log('server running...at 8080');
});

