var express = require('express');
var router = express.Router();
var web3 = require('../web3/web3.js');
var util = require('../lib/util/util.js');
require('../web3/web3.eth.js');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { layout: "main", data: {} });
});

router.post('/command', function(req, res, next) {

   
    let command = util.parseCommand(req.body.command);
    let token = command.cmd.split(".")
  

    if (token.length === 3) {


        if (typeof web3[token[1]][token[2]] === "function") {



            web3[token[1]][token[2]].call(null, command.params[0], command.params[1]).then(
               result => {

                  
                    res.send(result)

                },err => {

                   
                    res.send(String(err))

                }
            )

        } else {

            console.log("command not founnd")
        }


    } else if (token.length === 2) {

        if (typeof web3[token[1]] === "function") {

            web3[token[1]].call(null, command.params[0], command.params[1]).then(
                result => {
                    res.send(result)

                }

            )

        } else {

            console.log("command not founnd")
        }


    }




});


module.exports = router;
