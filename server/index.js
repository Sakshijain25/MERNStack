import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import {router, router2} from './routes/student.js';
import studentRoutes from './routes/student.js';

const app = express();
// app.use('/students',router);
// app.use(router2)
app.use(bodyParser.json({"limit": "20mb", "extended":true}));
app.use(bodyParser.urlencoded({"limit": "20mb", "extended":true}));
app.use(cors())
app.use('/students', studentRoutes);
// app.use(cors())

const CONNECTION_URL = 'mongodb+srv://khushboo:Khushboo2596@cluster0.9s4myqz.mongodb.net/test?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;
// const PORT = 5000
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

//mongoose.set('findOneAndReplace ', false);
mongoose.set('strictQuery', true);