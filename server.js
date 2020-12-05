const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./routes/api/users');
const workouts = require('./routes/api/workouts');
 
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = require('./config/keys').mongoURI;

mongoose.connect(dbConfig, { useNewUrlParser: true })
    .then(() => console.log('mongoose connected to mongo db :)'))
    .catch(err => console.log('mongoose could not connect to mongo db :(', err));

const connection = mongoose.connection;

app.use('/api/users', users);
app.use('/api/workouts', workouts);

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
