const ApiError = require('../../../utils/ApiError');
const schema = require('./yahoo.schema');
const request = require("request");


/**
 * get stock analysis by 
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getStockAnalysis = async (symbol) => {
if(!symbol){
  throw new ApiError("Error in external symbol required!" );
}

var options = await schema.getAnalysisOptions(symbol);
return _makeRequest(options);

};

/**
 * get stock news by 
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getStockNews = async (symbol , region) => {
  if(!symbol){
    throw new ApiError("Error in external symbol required!" );
  }
  
  var options = await schema.getNewsOptions(symbol , region);
  return _makeRequest(options);
  
};
//can be put in util or utils promisify could be used
const _makeRequest = async function(options){
  return new Promise(function(resolve, reject){
    request(options, function (error, response, body) {
      if (error) {
       return reject(error);
      }
       return resolve(body);
    });
  });
}


module.exports = {
  getStockAnalysis,
  getStockNews
};