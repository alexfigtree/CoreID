var bitcoin = require('bitcoin');
var crypto = require('crypto');
var fs = require('fs');
var jsonfile = require('jsonfile')
var request = require('request')

var address = "mkqCZE3X1Yab7pHkg3FnVNvaYSx8p8N3Zs"
var address1 = "mjH9KTBnNyzdLifkr6xch5FkXnGdbf27mq"
var algo = "sha256"
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'fred',
  pass: 'fred'
});

jsonfile.readFile('payload.json',function(err, obj){
  obj.entries.map((document)=>{
    var shasum = crypto.createHash(algo)
    var hashedvalues
    for(var key in document.payload){
      if (key != "iss"){
        shasum.update(Buffer.from(document.payload[key].toString()))
      }
    }
    request(document.payload.iss,function(error, response, body){
      if(!error && response.statusCode == 200){
        var buf = (Buffer.from(body.toString()))
      }
    })
    .on('error', function(err){
      console.log(err)
    })
    .on('data', function(response){
      shasum.update(response)
    })
    .on('end', function(response){
      console.log("done")
      hashedvalues = shasum.digest('hex')
      console.log(hashedvalues)
      if (hashedvalues != document.signatures[0].hashedPayload){
        return console.error("Payload data has changed!!!")
      }else{
        var temp = document.signatures.pop()
        console.log(temp)
        client.verifyMessage(temp.address, temp.signature, temp.hashedPayload, function(err, boolVal){
          if(err){
            return console.error(err)
          }
          //console.log(document.signatures.pop().address )
          console.log("message signature is :", boolVal)
        })
      }

    })
  })
})
