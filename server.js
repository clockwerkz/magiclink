const express = require("express");
const app  = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send("Hello!"));
app.get('/test', (req, res) => res.send("testing 123"));


app.listen(PORT);