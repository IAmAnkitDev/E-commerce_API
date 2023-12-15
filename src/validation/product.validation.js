const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

exports.validationCreateProduct = (req, res, next) => {
  const validateCreateProduct = (product) => {
    const JoiSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      image: Joi.string().required(),
      rating: Joi.object().required(),
      price: Joi.number().required(),
    });
    return JoiSchema.validate(product);
  };
  const response = validateCreateProduct(req.body);
  if (response.error) {
    const { message } = response.error.details[0];
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      message,
      status: false,
    });
  }
  return next();
};
