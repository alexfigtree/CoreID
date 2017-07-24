var bitcoin = require('bitcoin');
var crypto = require('crypto');
var fs = require('fs');
var jsonfile = require('jsonfile')
var request = require('request')

var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'user',
  pass: 'pass'
});
var address = "mfktUYX4YPoiPuxNJujk7uJLM1ZcN16JbG"
var address1 = "mjH9KTBnNyzdLifkr6xch5FkXnGdbf27mq"
var signature1 = ""
// var file = "./pdf.pdf"
var algo = "sha256";
var shasum = crypto.createHash(algo);

// var s = fs.ReadStream(file);
var samplePayloadObject = {}

var jsonObject = {}
jsonfile.readFile('./../../data/payload.json', function(err, obj){
<<<<<<< Updated upstream
=======
  //console.log(obj)
>>>>>>> Stashed changes
  //console.log(JSON.stringify(obj))
  obj.entries.map((document) => {
    var shasum1 = crypto.createHash(algo);
    //console.log(JSON.stringify(document.payload, null, 2))
    var hashedvalues
    for (var key in document.payload){
      if (key != "iss"){
        shasum1.update(Buffer.from(document.payload[key].toString()))
      }
    }

    
    console.log("done")
    hashedvalues = shasum1.digest('hex')
    console.log(hashedvalues)
    //console.log(hashedvalues)
    //console.log("fuck",document)
    client.signMessage(address, hashedvalues, function(err,signature){
      //console.log(signature)
      //console.log(address1)
      document.signatures.push({"address":address, "signature": signature, "hashedPayload": hashedvalues})
      //console.log(JSON.stringify(document.signatures))
      //console.log(JSON.stringify(obj, null, 2))
      fs.writeFile("../../data/payload.json", JSON.stringify(obj, null, 2), function(err){
        if (err) return console.log(err);

      })
    })


  })
})

// s.on('data', function(d){ shasum.update(d); jsonObject["rawdata"]+=d.toJSON('base64')});
//
//
// s.on('end', function(){
//
//   var d = shasum.digest('hex');
//   console.log(d)
//   jsonObject["data"] = d;
//   jsonObject["algo"] = algo;
//   jsonObject["address"] = address1
//
//
//   client.signMessage(address1,d, function(err, signature){
//     if(err){
//       return console.error(err);
//     }
//     jsonObject["signature"] = signature
//     console.log(jsonObject)
//
//     signature1 = signature;
//     client.verifyMessage(address1, signature1, d, function(err, boolVal){
//       if (err){
//         return console.error(err);
//       }
//       // console.log(address)
//       // console.log(message)
//       // console.log(signature1)
//       // console.log(boolVal)
//
//
//     });
//     // console.log("signature "+signature)
//   })
//
// })
