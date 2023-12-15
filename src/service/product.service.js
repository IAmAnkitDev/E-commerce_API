const axios = require('axios');
const { Product } = require('../models');
const { PRODUCT_API_ENDPOINT } = require('../config/constant');

exports.saveJsonData = async () => {
  try {
    const count = await Product.countDocuments();
    if (count > 0) {
      const result = { errors: 'Products already exist, Please delete all products before save.' };
      return result;
    }
    const { data } = await axios.get(PRODUCT_API_ENDPOINT);
    const result = await Product.insertMany(data);
    return result;
  } catch (err) { return err; }
};

exports.createProduct = async (payload) => {
  try {
    const result = await Product.create(payload);
    return result;
  } catch (err) { return err; }
};

exports.getProduct = async (query) => {
  try {
    const { search } = query;
    const { category } = query;
    const searchCriteria = {
      title: { $regex: new RegExp(search, 'i') },
    };
    const filter = category ? { category } : {};
    const combinedFilters = { ...searchCriteria, ...filter };
    const result = await Product.find(combinedFilters);
    return result;
  } catch (err) { return err; }
};

exports.updateProductById = async (id, updatePayload) => {
  try {
    const result = await Product.findByIdAndUpdate(id, updatePayload, { new: true });
    return result;
  } catch (err) { return err; }
};

exports.deleteProductById = async (id) => {
  try {
    const result = await Product.findByIdAndDelete(id);
    return result;
  } catch (err) { return err; }
};
