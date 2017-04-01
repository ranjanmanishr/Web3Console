var web3 = require('./web3.js');
var Promise = require("bluebird");
var web3RPC = require('../lib/configuration/web3RPC.js');

var exports = module.exports = web3.eth;

exports.getBlock = function(param1, param2, param3) {


    return new Promise(function(resolve, reject) {


        web3RPC.eth.getBlock(param1, function(err, result) {




            if (err) {

                reject(err);
            } else {
                resolve(result)
            }

        })

    });

}


exports.getBalance = function(param1, param2, param3) {


    return new Promise(function(resolve, reject) {


        web3RPC.eth.getBalance(param1, function(err, result) {


            if (err) {

                reject(err);
            } else {
                resolve(result)
            }
        })

    });

}


exports.getStorageAt = function(param1, param2, param3) {



    return new Promise(function(resolve, reject) {


        web3RPC.eth.getStorageAt(param1, param2, function(err, result) {



            if (err) {

                reject(err);
            } else {
                resolve(result)
            }

        })

    });

}

exports.getCode = function(param1, param2, param3) {



    return new Promise(function(resolve, reject) {


        web3RPC.eth.getCode(param1, function(err, result) {


            if (err) {

                reject(err);
            } else {
                resolve(result)
            }

        })

    });

}


exports.getTransaction = function(param1, param2, param3) {



    return new Promise(function(resolve, reject) {


        web3RPC.eth.getTransaction(param1, function(err, result) {

            if (err) {

                reject(err);
            } else {
                resolve(result)
            }
        })

    });

}
