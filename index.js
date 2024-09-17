const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importar las rutas desde el archivo timestamp.js
const timestampRoutes = require('./routes/timestamp');

// Usar las rutas de la API
app.use('/api', timestampRoutes);

// Ruta principal para la página de inicio
app.get('/', (req, res) => {
  res.send('Bienvenido al Timestamp Microservice');
});

// Escuchar en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
