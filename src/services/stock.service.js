const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {yahooService} = require('./external');


/**
 * get stock analysis by symbol
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getAnalysisBySymbol = async (symbol) => {
  console.log("ooooo"+symbol);
  return yahooService.getStockAnalysis(symbol);
};

/**
 * get stock news by symbol
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getNewsBySymbol = async (symbol, region) => {
  console.log("ooooo"+symbol);
  region = region || 'US';
  return yahooService.getStockNews(symbol, region);
};


module.exports = {
  getAnalysisBySymbol,
  getNewsBySymbol
};
