const express = require('express');
const logger = require('./logger')

const app = express();
const port = 3000;


const middlewareIfUserAdmin = (req, res, next) => {
  const { user } = req.query
  if (user === 'admin') {
    next();
  }
  else return res.status(403).json({ error: 'Access Denied' });
};

const AdminMessage = (req, res, next) => {
  res.send('Welcome to the Admin Page!');
};

app.use(logger);


app.use('/admin', middlewareIfUserAdmin, AdminMessage, );

app.use('/public', (req, res, next) => {
  res.send('This is a public page.');
});

// Its in the end cause if it will be first it will cancel all the others 
app.use('/', (req, res, next) => {
  res.send('Welcome to the Home Page!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});