const express = require('express');
const app = express();  
const cors = require('cors');
const port = 3000;
const routes = require('./api/endPoints')
const connection = require('./models/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);
app.use('/ping', routes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
