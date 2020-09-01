const Joi = require('@hapi/joi');

const stockNews = {
query: Joi.object().keys({
    symbol: Joi.string().required(),
    region: Joi.string().valid('AU','CA', 'FR', 'DE','HK', 'US', 'IT', 'ES', 'GB', 'IN' , ''),
  }),
};

const stockAnalysis = {
  query: Joi.object().keys({
    symbol: Joi.string().required()
  }),
};



module.exports = {
    stockNews,
    stockAnalysis
};
