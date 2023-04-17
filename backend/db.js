const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB Atlas connection string
const uri = 'mongodb+srv://omelihtolunay:admin123@canli-fiyat.qpmblbx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  connectTimeoutMS: 3000 // or higher if needed
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect };
