const { StatusCodes } = require('http-status-codes');

const createError = require('http-errors');

const { productService } = require('../service');

exports.storeApiData = async (req, res) => {
  try {
    const data = await productService.saveJsonData();
    if (data.errors) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: data.errors,
        statusCode: StatusCodes.BAD_REQUEST,
        status: false,
        message: data.message,
      });
    }
    return res.status(StatusCodes.OK).json({
      data,
      statusCode: StatusCodes.OK,
      status: true,
      message: 'Save Api Data In Product.',
    });
  } catch (err) { return err; }
};

exports.create = async (req, res) => {
  try {
    const data = await productService.createProduct(req.body);
    if (data.errors) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: data.errors,
        statusCode: StatusCodes.BAD_REQUEST,
        status: false,
        message: new createError.BadRequest().message,
      });
    }
    return res.status(StatusCodes.CREATED).json({
      data,
      statusCode: StatusCodes.CREATED,
      status: true,
      message: 'Product Created Successfully.',
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      error: err,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      status: false,
      message: new createError.InternalServerError().message,
    });
  }
};

exports.get = async (req, res) => {
  try {
    const query = { ...req.query };
    const data = await productService.getProduct(query);
    if (data.errors) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: data.errors,
        statusCode: StatusCodes.BAD_REQUEST,
        status: false,
        message: data.message,
      });
    }
    return res.status(StatusCodes.OK).json({
      data,
      statusCode: StatusCodes.OK,
      status: true,
      message: 'Fetch Product List',
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      error: err,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      status: false,
      message: new createError.InternalServerError().message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await productService.updateProductById(id, body);
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).json({
        data,
        statusCode: StatusCodes.NOT_FOUND,
        status: false,
        message: new createError.NotFound().message,
      });
    }
    if (data.errors) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: data.errors,
        statusCode: StatusCodes.BAD_REQUEST,
        status: false,
        message: new createError.BadRequest().message,
      });
    }
    return res.status(StatusCodes.OK).json({
      data,
      statusCode: StatusCodes.OK,
      status: true,
      message: 'Product Updated Successfully.',
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      error: err,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      status: false,
      message: new createError.InternalServerError().message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.deleteProductById(id);
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).json({
        data,
        statusCode: StatusCodes.NOT_FOUND,
        status: false,
        message: new createError.NotFound().message,
      });
    }
    if (data.errors) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: data.errors,
        statusCode: StatusCodes.BAD_REQUEST,
        status: false,
        message: new createError.BadRequest().message,
      });
    }
    return res.status(StatusCodes.OK).json({
      data,
      statusCode: StatusCodes.OK,
      status: true,
      message: 'Product Deleted Successfully.',
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      error: err,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      status: false,
      message: new createError.InternalServerError().message,
    });
  }
};
