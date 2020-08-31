const express = require("express");
require('dotenv').config();

const cors = require("cors");

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt  
const passport = require('passport');
var bodyParser = require('body-parser');



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const db = require('./data');
const data = require("./data");

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json())

  
const userRepository = {
    db : data,
    fetch : function(id) {
        console.log(this);
        return new Promise((resolve, reject) => {
            if (this.db.hasOwnProperty(id)) {
                resolve(this.db[id])
            } else {
                resolve(null);
            }
        })
    },
    test : () => console.log(this)
}


app.use(cors({
    origin: 'http://localhost:3000'
}));




app.post('/email', (req, res) =>{
    let email = req.body.email;
    console.log(email);
    
    const msg = {
    to: email,
    from: 'test@vrms.io',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    res.send({msg: "Email was sent!"});

});


app.get('/test', (req, res) => res.send({"msg":"testing 123"}));

app.get('/user/:id', (req, res)=> {
    userRepository.test();
    userRepository.fetch(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.status(401).send(err));
});



app.listen(PORT);