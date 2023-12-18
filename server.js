const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('<h1>GET request to root directory</h1>')
})