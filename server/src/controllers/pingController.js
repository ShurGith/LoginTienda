const connection = require('../models/db');


module.exports.ping = (req, res) => {

    const query = 'SELECT * FROM users';
    try {
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);

    }

} 