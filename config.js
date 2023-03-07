const mysql = require('mysql2');

const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password: 'Password',
        database: 'customer_data'
});





con.connect((err, res) => {
    if (err) 
    {
        console.warn(err)
    } else {console.log('CONNECTED TO THE DATABASE customer_data')}

});



module.exports = con;
