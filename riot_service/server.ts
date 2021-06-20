import express from "express";
import cors from "cors";
import { lolRouter } from "./src/apis/LoL";
// import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
    origin: [
        `${process.env.FRONT_URL}`,
        'http://127.168.0.1:3000',
        'http://localhost:3000',
    ],
    credentials: true
}));

// mongoose.connect(process.env.MongoURI, { useNewUrlParser: true })
//     .then(() => console.log('mongoose connected to mongo db :)'))
//     .catch(err => console.log('mongoose could not connect to mongo db :(', err));

// const connection = mongoose.connection;

// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// })

app.use("/api/lol", lolRouter);

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
