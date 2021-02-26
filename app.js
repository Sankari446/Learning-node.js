const express = require('express');
const mongoose = require('mongoose');
const sankRoutes = require('./routes/sankRoutes');
const { success, error } = require("consola");
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://sank123:F7qEZLZy1IcsTksY@cluster0.v4kn9.mongodb.net/node-sank';
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => success({ message: `MONGO DB CONNECTED`, badge: true }))
  .catch((err) =>
    error({ message: `UNABLE TO CONNECT TO DATABASE ${err}`, badge: true })
  );

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(sankRoutes);

app.listen(3000, () => {
  success({ message: `SERVER STARTED ON PORT 3000`, badge: true });
})