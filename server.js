/* jshint esversion: 6 */
const express = require('express');
const path = require('path');
const app = express();

// Getting our posts routes
const routes = require('./server/routes/routes');

// Using middleware
app.use(express.static(path.join(__dirname, 'dist/angular-and-node')));
app.use('/routes', routes);

// Catch all the requests and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-and-node/index.html'));
});
const port = process.env.port || 4600;
app.listen(port, (req, res) => {
  console.log('Server running on port 4600');
});
