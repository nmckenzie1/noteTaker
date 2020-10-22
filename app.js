const express = require('express');
const path = require('path');
const noteJSON = require('./db/db.json');
const PORT = 8080;

const app = express();

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.get('/api/notes', (req, res) => {
  res.json(noteJSON);
});


app.post('/api/notes', (req, res) => {
const lastId = parseInt(noteJSON.length);
const id = lastId + 1;
noteJSON.push( { id, ...req.body} );
res.json(noteJSON);
});


app.delete('/api/notes/:id', (req, res) => {
const { id } = req.params.id
const noteIndex = noteJSON.findIndex(n => n.id === id);
noteJSON.splice(noteIndex, 1);
res.end("DELETION");
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));