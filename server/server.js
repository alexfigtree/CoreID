var bitcoin = require('bitcoin')
var crypto = require('crypto')

var exports = module.exports = function(){
  var client = new bitcoin.Client({
    host: 'localhost',
    port: '8332',
    user: 'fred',
    pass: 'fred'
  })

  console.log('fuck')
  client.getBalance(function(err, msg){
    console.log(msg)
  })
};
exports.sayHelloinEnglish = function(){
  return "hello";
}
exports.sign = function(document){
  //signing(document)
  console.log(document)
  console.log(JSON.stringify(document))

  var address = "mjH9KTBnNyzdLifkr6xch5FkXnGdbf27mq"
  var message = JSON.stringify(document.payload)
  var signaturePayload = {}

  console.log(message)
  client.signMessage(address, message,function(err,signature){
    if(err){
      return console.error(err);
    }
    signaturePayload["address"] = address
    signaturePayload["signature"] = signature
    console.log(signature)
    console.log(address)

  })

}
