
//import  React from "react";
const bodyParser = require('body-parser');
const mongoose=require( 'mongoose');
const cors =require( 'cors');
const express =require( "express");
const postRoutes =require( './S3_routes/posts');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

//const CONNECTION_URL = 'mongodb://localhost:27017/listdb';
const URL="mongodb+srv://shoponline:SHOPmongo@cluster0.6j0mw.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 5003;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);