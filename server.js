const express = require('express');
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./config/db")

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to random ideas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
