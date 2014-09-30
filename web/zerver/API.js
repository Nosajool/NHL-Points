var request = require("request");

request("https://www.kimonolabs.com/api/9eil5ub2?apikey=" + ENV['API_KEY']), 
function(err, response, body) {
  console.log(body);
});