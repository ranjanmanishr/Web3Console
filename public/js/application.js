  let API=new api();
$(document).ready(function() {
    $('#term_demo').terminal(function(command, term) {



        if (API.isValidCommand(command)) {
            $.ajax({
                    url: '/command',
                    type: 'POST',
                    data: {"command":command},
                    success: function(result) {

                         term.echo(JSON.stringify(result, null, 2));
                    },
                    error: function(result) {

                     term.echo(JSON.stringify(result, null, 2));


                    }
                }

            )

        } else {
            term.echo("Command not found");

        }






    }, {
        greetings: 'Welcome to EVM',
        name: 'js_demo',
        height: 600,
        prompt: 'ETHEREUM> '
    });

});





function api() {
    this._1_web3 = ["isConnected", "setProvider", "currentProvider", "reset", "sha3", "toHex", "toAscii", "fromAscii", "toDecimal",
        "fromDecimal", "fromWei", "toWei", "toBigNumber", "isAddress"
    ];
    this._2 = ["version", "net", "eth", "db", "ssh"];
    
    this._2_vesrion = ["api", "node", "getNode", "network", "getNetwork", "ethereum", "getEthereum", "whisper", "getWhisper"];
    
    this._2_net = ["listening", "getListening", "peerCount", "getPeerCount"];
    
    this._2_eth = ["defaultAccount", "defaultBlock", "syncing", "getSyncing", "isSyncing", "coinbase", "getCoinbase",
        "hashrate", "getHashrate", "gasPrice", "getGasPrice", "accounts", "getAccounts", "mining", "getMining", "blockNumber", "getBlockNumber", "register", "unRegister", "getBalance", "getStorageAt", "getCode", "getBlock", "getBlockTransactionCount", "getUncle", "getBlockUncleCount", "getTransaction", "getTransactionFromBlock", "getTransactionReceipt", "getTransactionCount", "sendTransaction", "sendRawTransaction", "sign", "call", "estimateGas", "contract", "getCompilers", "compile"
    ];
    this._2_db = ["putString", "getString", "putHex", "getHex"];
    
    this._2_ssh = ["post", "newIdentity", "hasIdentity", "newGroup", "addToGroup", "addToGroup"];



}

api.prototype.isValidCommand = function(str) {

    let regex = /^web3.(\w)(\.*)(.*)(\()(.*)((\)|\);)$)/;
    if (!regex.test(str)) return false;

    let token = str.replace(/(\()(.*)((\)|\);)$)/, '').split(".");

    let flag = true;
    if (token.length === 2) {

        return this._1_web3.indexOf(token[1]) > -1;


    } else if (token.length === 3) {

        switch (token[1]) {

            case "version":
                flag = this.check(token[2], this._2_vesrion);
                break;

            case "net":
                flag = this.check(token[2], this._2_net);
                break;

            case "eth":
                flag = this.check(token[2], this._2_eth);
                break;

            case "db":
                flag = this.check(token[2], this._2_db);
                break;

            case "ssh":
                flag = this.check(token[2], this._2_ssh);
                break;



        }



    }

    return flag;
}


api.prototype.check=function(val,arr){
  
return arr.indexOf(val)>-1;
}
