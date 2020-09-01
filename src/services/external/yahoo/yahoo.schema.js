const constants = require('./yahoo.constants');
const ApiError = require('../../../utils/ApiError');

var getNewsOptions = async function (symbol, region){
    let requiredArray = ['url','x-rapidapi-host','x-rapidapi-key'];
    await _validate(requiredArray);
    let options = {
            method: 'GET',
            url: constants['url'] + 'get-news',
            qs: {category: symbol , region:region},
            headers: {
            'x-rapidapi-host': constants['x-rapidapi-host'],
            'x-rapidapi-key': constants['x-rapidapi-key'],
            useQueryString: true
            }
        };

    return options;

}

var getAnalysisOptions = async function(symbol){
    let requiredArray = ['url','x-rapidapi-host','x-rapidapi-key'];
    await _validate(requiredArray);
    let options = {
            method: 'GET',
            url: constants['url'] + 'v2/get-analysis',
            qs: {symbol: symbol},
            headers: {
            'x-rapidapi-host': constants['x-rapidapi-host'],
            'x-rapidapi-key': constants['x-rapidapi-key'],
            useQueryString: true
            }
        };
    return options;

}

var _validate = function(requiredArray){
    if(!Array.isArray(requiredArray)){
        throw new ApiError("Error in _validate : data type Error");
        // return false;
    }
    for(let element of requiredArray){
        if(!(element in constants && constants[element])){
            throw new ApiError("Error in _validate : " +element + " required!");
            // return false;
        }
    }
    return true;
}

module.exports = {
    getNewsOptions,
    getAnalysisOptions
  };

