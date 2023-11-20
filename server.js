const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config()

let dbConnect = require('.dbConnect');

app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "Welcome to my Blog Application!"});
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});