const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const app = express();
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to random ideas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
