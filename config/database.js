const mongoose = require('mongoose');
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI)

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
