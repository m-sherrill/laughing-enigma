const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(
    db || 'mongodb://127.0.0.1:27017/devconnector',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    )
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;