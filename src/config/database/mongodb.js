const mongoose = require('mongoose');
const { MONGO_URL } = require('../constant');

const connect = mongoose.connect(MONGO_URL);
connect.then(
  () => {
    console.log(`Database: ${MONGO_URL} 🔥`);
  },
).catch((err) => console.log(err));
