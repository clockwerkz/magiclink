const express = require("express");
const cors = require("cors");

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => res.send({"msg":"Hello!"}));
app.get('/test', (req, res) => res.send({"msg":"testing 123"}));


app.listen(PORT);