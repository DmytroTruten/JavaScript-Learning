const http = require('http');

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req
  switch (method) {
    case "GET":
      const handleRequest = (req, res) => {
        
      }
    default:
      return
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});