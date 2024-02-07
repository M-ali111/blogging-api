const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./databaseConnection')
const {getMethod,searchMethod, postMethod, deleteMethod, patchMethod, putMethod } = require('./model/model');


const app = express();
app.use(bodyParser.json());

app.get('/blogs', getMethod);
app.get('/blogs/:id', searchMethod);
app.post('/blogs',postMethod);
app.delete('/blogs/:id',deleteMethod);
app.put('/blogs/:id', putMethod);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});
