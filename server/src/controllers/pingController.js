const connection = require('../models/db');


module.exports.ping = (req, res) => {

    const consult = 'SELECT * FROM users WHERE id = 1';
    try {
        connection.query(consult, (err, results) => {
          console.log(results);
        });
    } catch (error) {
        console.log(error);

    }

} 