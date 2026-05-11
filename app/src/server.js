const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos del mismo directorio src
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'Node.js', timestamp: new Date() });
});

// Cualquier otra ruta sirve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
