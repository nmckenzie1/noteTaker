const express = require('express');
const path = require('path');
const noteJSON = require('./db/db.json');
const PORT = 8080;

const app = express();



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));