const express  =require('express');
const bodyParser  =require('body-parser');

const { mongoose } =require('./db.js');
let employeeController = require('./controllers/employeeController.js');

let app = express();
app.use(bodyParser.json());

app.listen(9000, () => console.log('Server started at port : 9000'));

app.use('/employees', employeeController)