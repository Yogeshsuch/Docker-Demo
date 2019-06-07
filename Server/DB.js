const mysql = require('mysql')

function connect()
{
    const connection = mysql.createConnection({
        host:'192.168.43.69',
        user:'root',
        password:'manager',
        database:'DacDB',
        port:8888
       
    })
    connection.connect();
    return connection;
}

module.exports = {
    connect:connect
}