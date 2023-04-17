const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://omelihtolunay:admin123@canli-fiyat.qpmblbx.mongodb.net/canli-fiyat?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    app.post('/signup', async (req, res) => {
      const { name, phoneNumber, password } = req.body;
      const db = client.db('canli-fiyat');
      const usersCollection = db.collection('canlifiyat-deployment');

      // Hash the password before storing it
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      try {
        const result = await usersCollection.insertOne({ name, phoneNumber, password: hashedPassword });
        res.json(result);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while saving the user data' });
      }
    });

    app.post('/login', async (req, res) => {
        const { username, phoneNumber, password } = req.body;
        console.log('Login request received:', { username, phoneNumber, password });
      
        const db = client.db('canli-fiyat');
        const usersCollection = db.collection('canlifiyat-deployment');
      
        try {
          const user = await usersCollection.findOne({ name: username, phoneNumber: phoneNumber });
          console.log('User found:', user);
      
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            console.log('Password comparison result:', isPasswordCorrect);
      
            if (isPasswordCorrect) {
              res.json({ message: 'Login successful' });
            } else {
              res.status(401).json({ message: 'Incorrect password' });
            }
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'An error occurred while processing the login request' });
        }
    });
      

    app.get('/test', (req, res) => {
      res.json({ message: 'Server is working' });
    });

    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
