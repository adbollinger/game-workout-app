const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const cookieParser = require('cookie-parser');

const users = require('./routes/api/users');
const workouts = require('./routes/api/workouts');
const authentication = require('./routes/api/authentication');
 
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: [
        `${process.env.FRONT_URL}`,
        'http://127.168.0.1:3000',
        'http://localhost:3000',
    ],
    credentials: true
}));

app.use(cookieParser());

const dbConfig = config.get('mongoURI');

mongoose.connect(dbConfig, { useNewUrlParser: true })
    .then(() => console.log('mongoose connected to mongo db :)'))
    .catch(err => console.log('mongoose could not connect to mongo db :(', err));

const connection = mongoose.connection;

app.use('/api/users', users);
app.use('/api/workouts', workouts);
app.use('/api/auth', authentication);

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
