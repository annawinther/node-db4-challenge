const server = require('./server.js');

// const PORT = process.env.PORT || 5000;

server.listen(5000, () => {
  console.log('Listening on port', 5000);
});