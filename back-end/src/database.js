const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUniFiedtopology: true,
  });

  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('🏦 connected to the database!'));
}


module.exports = connectDB;
