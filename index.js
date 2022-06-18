const express = require( 'express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const PORT = 80;

app.get('/', (req, res) => {
res.sendFile(__dirname+'/index.html')});
app.listen(PORT, () => console.log("Server running"));
