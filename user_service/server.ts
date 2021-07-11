import express from "express";
import cors from "cors";
import { userRouter } from "./src/apis/user";
import { authRouter } from "./src/apis/auth";
import mongoose from "mongoose";

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

const MongoURI = process.env.MongoURI || '';

mongoose.connect(MongoURI, { useNewUrlParser: true })
    .then(() => console.log('mongoose connected to mongo db :)'))
    .catch(err => console.log('mongoose could not connect to mongo db :(', err));

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
