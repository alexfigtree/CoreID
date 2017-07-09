# CoreID

For Human Dynamics group blockchain-backed individual identity open source prototype


## Getting Started 

* Quick video demonstrating how to run this code: https://youtu.be/clJppZjnCkY
* This video accompanies the detailed instructions below.


## Setting up the bitcoin core

Summary: In this project we utilize the bitcoin core libraries for signing documents and claims and for validating the signatures, so we first need to download the bitcoin core binaries, and run the ./bitcoind with the correct configurations in the .bitcoin/bitcoin.conf file.
 
You can follow these instructions to set up your bitcoin core: 

* Download BitCoin Core Binaries: https://bitcoin.org/en/download. At the time of this update, the latest version to download was bitcoin-0.14.1-osx64.tar.gz for Mac. You can download it to your desktop or anywhere else.

* In a terminal, change your directory to the downloaded folder. From the `bin` folder, unpack and run ./bitcoind with proper configurations. You 

* npm install bitcoin. If you do not have npm already installed install it alongside the latest node version.

* Open a new terminal window. In the home directory you should have .bitcoin/ folder. On a Mac, this may be found under `/Library/Application Support/Bitcoin`. In it create a bitcoin.conf file if you want to save your default configurations when running ./bitcoind. Since we will be using the rpc functionality you would also need to add your own rpcuser and rpcpassword for use in the rpc.

* For specifications details on the package look here https://www.npmjs.com/package/bitcoin

 Side note: Be sure to create an public/private key pair to sign with using ./bitcoin-cli if you put type ./bitcoin-cli help a list of available commands will pop up to help you do that. After doing so make sure to copy over the address in to the signing section of document.js and claim.js. Be sure to change user and pass as well if necessary.
 
 
## Setting up Nginx 
 Next we need nginx to get around CORS access involved with running a browser application that needs to communicate with the bitcoind server. We proxy the hosting of the web client and bitcoind rpc server through one port, so we do not get a CORS issue.
 
* Install nginx (`brew install nginx` on Mac OS X Mountain Lion, for example) first if not already done.  

* Find the nginx.conf file on linux it should be in `/etc/nginx/nginx.conf` and on `/usr/local/etc/nginx/nginx.conf` on a Mac, and copy over the nginx.conf file that is in this repo into the nginx.conf file created when nginx was installed. This can be done using any text editor. Make sure that previous configurations are not overwritten.  
 
 
 ## Running the app
 
 * Now we are ready to run the app. Download a copy of this repository to your desktop. 
 
 * Open a new terminal window (assuming you already have a terminal window running ./bitcoind) and change your directory to the root of the downloaded CoreID repo. 
 
 * Pull the latest changes to the repo: `git pull`
 
 * Install all necessary libraries: `npm install` 
 
 * Start the application: `npm start`
 
 * `npm start` will open the app on your browswer on port 3000, but change the port to 8080 since we have proxied all of our requests through that. 


## Demo

To check out the demo itself navigate to documents, and click on a document to sign. To sign simply click the signing button. An alert window should pop up, and after clicking continue another window confirming the signature, hashed payload, and public address used in the signing should pop up. If the signature section is undefined or empty either your bitcoind server is not up or the connection to it is blocked by cors and the proxy not being set up correctly.

