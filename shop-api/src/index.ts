import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Product } from './models';
import { User } from './models';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

const uri = 'mongodb://localhost:27017/shop_db';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Add sample data if the collections are empty
    Product.countDocuments({}, (err, count) => {
      if (count === 0) {
        Product.create([
          { name: 'Product1', price: 10 },
          { name: 'Product2', price: 20 },
          { name: 'Product3', price: 30 }
        ]);
      }
    });

    User.countDocuments({}, (err, count) => {
      if (count === 0) {
        User.create([
          { displayName: 'User1', darkTheme: true },
          { displayName: 'User2', darkTheme: false },
          { displayName: 'User3', darkTheme: true }
        ]);
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
