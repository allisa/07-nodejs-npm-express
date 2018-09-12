'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
// Our files are in a puclic directory so they can be easily served to the client. Express JS will serve our files based on the path.
app.use(express.static(path.join(__dirname, 'public')));
app.get('/new', (req,res) => res.sendFile(path.join(__dirname, 'public', 'new.html')));
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});
app.get('*', (req,res) => res.status(404).send('404 not found'));

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});