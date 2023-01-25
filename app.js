const express = require('express')
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const path = require('path')


// database
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log('Database Connected');
})

// express boilerplate
const app = express();
app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`)
})

// cars
const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

// users
const userRouter = require('./routes/users')
app.use('/user', userRouter)
