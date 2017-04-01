var config = require('./index.js');
var Web3 = require('../../node_modules/web3/index.js');
var web3 = new Web3();


let url="http://"+config.get('web3:host')+":"+config.get('web3:port')



web3.setProvider(new web3.providers.HttpProvider(url));

module.exports = web3;