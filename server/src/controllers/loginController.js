const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { name, password } = req.body;
    
    const consult = 'SELECT * FROM users WHERE name = ? AND password = ?';
    try {
        connection.query(consult, [name, password], (err, results) => {
            if (err) throw err;
            if(results.length > 0) {
                const token = jwt.sign({ name }, "MiClaveSecretaDiscreto",{ 
                    expiresIn: '3m'
                    });
                res.json({ message: 'Login successful' , token: token});
            } else {
                res.json({ message: 'Invalid credentials' });
            }
        });
    } catch (error) {
        console.log(error);
    }   
}
    