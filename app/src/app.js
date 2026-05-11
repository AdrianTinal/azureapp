const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos del front
app.use(express.static(path.join(__dirname, 'index.html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor Node.js funcionando en Azure' });
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
