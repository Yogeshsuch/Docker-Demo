const express = require('express');
const mydatabase = require('./DB');
const router = express.Router();


router.get('/student', (request, response) => {
    const connection = mydatabase.connect();
    const statement = 'select roll_number, name, mark from student';

    connection.query(statement,(error,data)=>{
        if(error){
            console.log(error);
        }else{
            connection.end();
            response.send(data);
        }
    })
});

router.post('/student', (request, response) => {
    const roll_number = request.body.rollNo;
    const name = request.body.name;
    const mark = request.body.mark
    const connection = mydatabase.connect();
    const statement = `insert into student values(${roll_number},'${name}',${mark})`;

    connection.query(statement,(error,data)=>{
        if(error){
            console.log(error);
        }else{
            connection.end();
            response.send(data);
        }
    })
});

module.exports = router;