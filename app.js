// Load the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// Start the server
server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});