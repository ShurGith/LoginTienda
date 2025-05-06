const express = require('express');
const app = express();  
const cors = require('cors');
const port = 3000;
const routes = require('./api/endPoints')
const connection = require('./models/db');

app.use(cors());
app.use('/', routes);
const query = 'SELECT * FROM users';
try {
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
} catch (error) {
    console.log(error);

}
fetch(query)
    .then(response => response.json())
    .then(usuarios => {
        const tabla = document.querySelector('#tabla-usuarios tbody');
        usuarios.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
          `;
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al cargar los usuarios:', error));
console.log('Prueba');
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
