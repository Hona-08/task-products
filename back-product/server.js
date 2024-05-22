const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//for cors header error
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', productRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database sync error:', err);
});
