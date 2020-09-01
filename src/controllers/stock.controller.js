const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stockService } = require('../services');


const getNews = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['symbol']);
  const result = await stockService.getNewsBySymbol(filter);
  if(!result){
    throw new ApiError(httpStatus.NOT_FOUND, 'Symbol Not Found');
  }
  res.send(result);
});

const getAnalysis = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['symbol']);
  const result = await stockService.getAnalysisBySymbol(filter);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Symbol Not Found');
  }
  res.send(result);
});

module.exports = {
  getAnalysis,
  getNews
};
