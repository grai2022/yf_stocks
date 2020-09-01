const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {yahooService} = require('./external');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache({useClones:false});
const {NEWSTTL,ANLYSISTTL} = require('./../config/config')

/**
 * get stock analysis by symbol
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getAnalysisBySymbol = async (symbol) => {
  let cachedAnalysis = myCache.get(_getKey("ANALYSIS+",symbol) );

  if ( cachedAnalysis == undefined ){
    let updatedAnalysis = await yahooService.getStockAnalysis(symbol);
    myCache.set( _getKey("ANALYSIS+",symbol), updatedAnalysis , ANLYSISTTL)
    return updatedAnalysis;
  } else{
    return cachedAnalysis;
  }
   
};

/**
 * get stock news by symbol
 * @param {string} symbol
 * @returns {Promise<QueryResult>}
 */
const getNewsBySymbol = async (symbol, region) => {
  region = region || 'US';
  let cachedAnalysis = myCache.get(_getKey("ANALYSIS+",symbol,region));

  if ( cachedAnalysis == undefined ){
    let updatedAnalysis = await yahooService.getStockNews(symbol, region);
    myCache.set(_getKey("ANALYSIS+",symbol,region), updatedAnalysis , NEWSTTL)
    return updatedAnalysis;
  } else{
    return cachedAnalysis;
  }
};

var _getKey = function(){
  let key = '';
  for(let arg of arguments){
    key +=arg;
  }
  return key;
}


module.exports = {
  getAnalysisBySymbol,
  getNewsBySymbol
};
