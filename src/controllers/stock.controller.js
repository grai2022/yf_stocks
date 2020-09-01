const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stockService } = require('../services');


const getNews = catchAsync(async (req, res) => {
  let result = false;
  if(req && req.query && req.query.symbol){
    result = await stockService.getNewsBySymbol(req.query.symbol);
  }  
  if(!result){
    throw new ApiError(httpStatus.NOT_FOUND, 'Symbol Not Found');
  }
  res.send(result);
});

const getAnalysis = catchAsync(async (req, res) => {
  let result = false;
  console.log(req.query.symbol);
  if(req && req.query && req.query.symbol){
    result = await stockService.getAnalysisBySymbol(req.query.symbol);
  }
  
  if(!result){
    throw new ApiError(httpStatus.NOT_FOUND, 'Symbol Not Found');
  }
  res.send(result);
});

module.exports = {
  getAnalysis,
  getNews
};
