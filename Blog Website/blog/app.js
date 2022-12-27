import express from 'express'
import connectDB from "./db/connectdb.js";
import {join} from 'path'
import web from "./routes/web.js";
const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'))

app.use('/', web);

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})