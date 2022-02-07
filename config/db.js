const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;
dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(MONGODB_URI);
  console.log('connected')
}