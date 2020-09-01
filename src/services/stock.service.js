const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');


/**
 * get stock analysis by 
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getAnalysisBySymbol = async (symbol) => {
  return symbol;
};

/**
 * get stock news by 
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getNewsBySymbol = async (symbol) => {
  return symbol;
};


module.exports = {
  getAnalysisBySymbol,
  getNewsBySymbol
};
