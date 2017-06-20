const { JWD } = require('@trust/jose')
const keyto = require('@trust/keyto')
const crypto = require('@trust/webcrypto')
const TestRPC = require('ethereumjs-testrpc')
const Tx = require('ethereumjs-tx')
const Web3 = require('web3');

let publicKey
let privateKey
let secretKey
let web3

let payload = {
  iss: 'https://coreid.com',
  exp: Math.floor((new Date()).getTime() / 1000) + 24 * 60 * 60,
  iat: Math.floor((new Date()).getTime() / 1000)
}
console.log(payload);

let header = { typ: 'JWS', alg: 'KS256' }

let rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x47B760',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

crypto.subtle

  .generateKey(

    // use WebCrypto to generate new ECDSA secp256k1 keypair

    {
      name: 'ECDSA',
      namedCurve: 'K-256',
      hash: { name: 'SHA-256' }
    },
    true,
    ['sign', 'verify']
  )

  .then(keypair => {

    console.log(keypair)

    // sign JWD

    publicKey = keypair.publicKey
    privateKey = keypair.privateKey
    return JWD.encode({ signatures: [{ protected: header, cryptoKey: privateKey }], payload }, { serialization: 'document' })
  })

  .then(token => {

    // verify JWD

    return JWD.verify({ cryptoKey: publicKey, serialized: token, result: 'instance' })
  })

  .then(jwd => {

    console.log(jwd)

    // convert PEM private key to hex string

    let signingKey = privateKey.handle
    let Key = keyto.from(signingKey, 'pem')
    secretKey = Key.toString('blk', 'private')

    return secretKey
  })

  .then(secretKey => {

    // start testrpc Ethereum client

    web3 = new Web3()
    web3.setProvider(TestRPC.provider({
      accounts: [{
          secretKey: '0x' + secretKey,
          balance: '0x100000000000000000'  // fund newly generated account
        }]
    }))

    return web3
   })

  .then(web3 => {

    // sign Ethereum tx

    let tx = new Tx(rawTx)
    tx.sign(new Buffer(secretKey, 'hex'))
    let serializedTx = tx.serialize()

    // deploy Ethereum tx to the network

    return new Promise((resolve, reject) => {
        web3.eth.sendRawTransaction(serializedTx.toString('hex'), (err, txHash) => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            resolve(txHash)
          }
        })
    })
  })

  .then(txHash => {
    let blockFilter = web3.eth.filter('latest');
    return new Promise((resolve, reject) => {
      blockFilter.watch( () => {
        web3.eth.getTransactionReceipt(txHash, (err, receipt) => {
          if (err) {
            reject(err);
          }
          if (receipt) {
            blockFilter.stopWatching();
            resolve(receipt);
          }
        });
      });
    });
  })

  .then(receipt => {
      console.log(receipt)
  })

  .catch(console.log)
