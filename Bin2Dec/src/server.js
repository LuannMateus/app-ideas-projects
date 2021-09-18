import express from 'express';
import http from 'http';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/main', express.static(__dirname + '/main'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
