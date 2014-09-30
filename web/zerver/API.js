var request = require("request");

var base_url = "https://www.kimonolabs.com/api/";

var api_number = ENV['API_NUM'];
var api_key = ENV['API_KEY'];

var grabData = function(callback){
	request(base_url + api_number + "?apikey=" + api_key, function(err, response, body) {
  		callback(body);
	});
};

exports.grabData = grabData;