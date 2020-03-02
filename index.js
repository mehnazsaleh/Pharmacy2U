//Working with Node and Express JS frameworks for server side code
//https://expressjs.com/

const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('public'));
app.use(express.json());

//create new Db file or load existing
const database = new Datastore('auditlog.db');
database.loadDatabase(); 

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date(Date.now()).toString();
    data.timestamp = timestamp;
    console.log('request received');
    database.insert(data);

    response.json({
        status: 'sucess'
    });
});