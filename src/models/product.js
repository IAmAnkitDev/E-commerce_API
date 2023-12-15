const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: { required: true, type: String },
  price: { required: true, type: Number },
  description: { required: true, type: String },
  category: { required: true, type: String },
  image: { required: false, type: String },
  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
