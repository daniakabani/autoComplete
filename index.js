require('dotenv').config();

const http = require('http');
const app = require('./main/app');

const port = process.env.port || 3004;

const server = http.createServer(app);

server.listen(port);