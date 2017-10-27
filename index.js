// index.js file
// require('babel-core/register');
// require('babel-polyfill');
// require('whatwg-fetch');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config();

var fetch = require('node-fetch');
var https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false
})

// import 'whatwg-fetch';

console.log("here");
// export function fetch() {
//   return () => {
fetch('https://10.234.213.130/redfish/v1/', {
// fetch('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    // 'Auhtorization': 'Basic cm9vdDpwYXNzd29yZA==',
  },
}, { agent })
.then((response) => response.json())
.then((responseJson) => {
  console.log("redfish:", responseJson);
  //dispatch(Actions.jokeFetched(responseJson));
})
.catch((error) => {
  console.error("fetch error:", error);
});
//   }
// }
