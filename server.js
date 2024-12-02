// require express
const express = require("express");

// require dotenv
require("dotenv").config();

// import the routes
const userRoutes = require('./routes/user');

// instance of express
const app = express();
app.use(express.json());



//DB link up
const connectDB = require('./config/connectDB')
connectDB()


// routes

// test
// app.get('/', (req, res)=> {
//     res.end('This test')
// })

app.use('/api/users', userRoutes);

// PORT
const PORT = process.env.PORT || 4500;

// Server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
