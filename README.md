# CoreID

For Human Dynamics group blockchain-backed individual identity open source prototype

## Getting Started 

* Quick video demonstrating how to run this code: https://youtu.be/clJppZjnCkY

 In this project we utilize the bitcoin core libraries for signing documents and claims and for validating the signatures, so we first need to download the bitcoin core binaries, and run the ./bitcoind with the correct configurations in the .bitcoin/bitcoin.conf file
 
 Be sure to create an public/private key pair to sign with using ./bitcoin-cli if you put type ./bitcoin-cli help a list of available commands will pop up to help you do that. After doing so make sure to copy over the address in to the signing section of document.js and claim.js. Be sure to change user and pass as well if necessary.
 
 Next we need nginx to get around CORS access involved with running a browser application that needs to communicate with the bitcoind server. 
 
 Find the nginx.conf file on linux it should be in /etc/nginx/nginx.conf, and copy over the nginx.conf file that is in this repo.
 
 
 
 Now we are ready to run the app.
 
 
`npm install` 

`npm start`

But this will open the app on your browswer on port 3000, but change the port to 8080 since we have proxied all of our requests through that. 

## Demo

To check out the demo itself navigate to documents, and click on a document to sign. To sign simply click the signing button. An alert window should pop up, and after clicking continue another window confirming the signature, hashed payload, and public address used in the signing should pop up. If the signature section is undefined or empty either your bitcoind server is not up or the connection to it is blocked by cors and the proxy not being set up correctly.

