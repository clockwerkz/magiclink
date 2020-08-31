const express = require("express");
const cors = require("cors");

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt  
const passport = require('passport');
var bodyParser = require('body-parser')

const nodemailer = require('nodemailer');

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
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'vqmuhlrgfchueytzqy@etochq.com',
            pass: "1234"
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: email,
        subject: "This is a Magic LinK!",
        body: "This would be your magic link code."
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.send("Email was sent!");

});


app.get('/test', (req, res) => res.send({"msg":"testing 123"}));

app.get('/user/:id', (req, res)=> {
    userRepository.test();
    userRepository.fetch(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.status(401).send(err));
});



app.listen(PORT);