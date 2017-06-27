# CoreID

For Human Dynamics group blockchain-backed individual identity open source prototype

* First Shared Diagram: https://www.draw.io/#Halexfigtree%2FCoreID%2Fmaster%2FInitialDiagram.xml

## Getting Started 
 In this project we utilize the bitcoin core libraries for signing documents and claims and for validating the signatures, so we first need to download the bitcoin core binaries, and run the ./bitcoind with the correct configurations in the .bitcoin/bitcoin.conf file
 
 Next we need nginx to get around CORS access involved with running a browser application that needs to communicate with the bitcoind server. 
 
 Find the nginx.conf file on linux it should be in /etc/nginx/nginx.conf, and copy over the nginx.conf file that is in this repo.
 
 Now we are ready to run the app.
 
 
`npm install` 

`npm start`

But this will open the app on your browswer on port 3000, but change the port to 8080 since we have proxied all of our requests through that. 
## Documentation


Documentation about the front-end UI and UX for an end-user blockchain-enabled individual identity and digital signature prototype application


### A. Initial Mockups

| Initial Mockups  | Assets  | Issues  |
|---|---|---|
| Dashboard  | [Updated_mockup_5_27_17.png](https://github.com/alexfigtree/CoreID/blob/master/docs/Updated_mockup_5_27_17.png)  |  [#5](https://github.com/alexfigtree/CoreID/issues/5) |
| Document  | [Create_doc_functionality_mockup_6_15_17.jpg](https://github.com/alexfigtree/CoreID/blob/master/docs/Create_doc_functionality_mockup_6_15_17.jpg) | [#5](https://github.com/alexfigtree/CoreID/issues/5)  |
| Attestations/Claims | [Create_doc_functionality_mockup_6_15_17.jpg](https://github.com/alexfigtree/CoreID/blob/master/docs/Create_doc_functionality_mockup_6_15_17.jpg) | [#5](https://github.com/alexfigtree/CoreID/issues/5)  |
| Executing a Signature  | File(s)  | [#23](https://github.com/alexfigtree/CoreID/issues/23)  |
| Verifying a Signature | File(s)  | [#24](https://github.com/alexfigtree/CoreID/issues/24)  |

### B. Architectural Documentation

| Architectural Documentation  | Assets  | Issues  |
|---|---|---|
| Swimlane Diagram | [File(s)](https://github.com/alexfigtree/CoreID/blob/master/docs/Diagram.md) | [#19](https://github.com/alexfigtree/CoreID/issues/19)  |
| User Flow  | File(s)  | [#6](https://github.com/alexfigtree/CoreID/issues/6)  |
| Key Use Cases  |  File(s) |  [#18](https://github.com/alexfigtree/CoreID/issues/18) |
| Data Model  | [File](https://github.com/alexfigtree/CoreID/blob/master/docs/Data_Model_and_Conceptual_Architecture.md#data-model)  |  [#21](https://github.com/alexfigtree/CoreID/issues/21)  |
| Conceptual Architecture for Analytics | File(s) |  [#22](https://github.com/alexfigtree/CoreID/issues/22)  |


### C. Qualitative Software Testing

Qualitative software testing and documentation of plan and results


| Software Test Plan  | Software Test Results  | Issues  |
|---|---|---|
| Mockup Test Plan | Mockup Test Results   |  [#25](https://github.com/alexfigtree/CoreID/issues/25)   |
| Prototype Test Plan | Prototype Test Results   |  [#26](https://github.com/alexfigtree/CoreID/issues/26)  |

### D. Project Demonstrations

Slides and screen video of informal mid-project demo and final demo

| Project Demonstration  | Slides  | Video  | Issues  |
|---|---|---|---|
| Midpoint Project Demo | Slide Deck(s)  | Video(s)  | [#27](https://github.com/alexfigtree/CoreID/issues/27)  |
| Final Project Demo | Slide Deck(s)  | Video(s)  | [#28](https://github.com/alexfigtree/CoreID/issues/28)  |


### E. Prototype UI/UX 

| UI/UX  | Assets  | Issues  
|---|---|---|
| UI Content | [Files](https://github.com/alexfigtree/CoreID/blob/master/docs/UI_Content.md)  | [#7](https://github.com/alexfigtree/CoreID/issues/7)   |  
| UX Design | [Files](https://github.com/alexfigtree/CoreID/blob/master/docs/UX_Design.md) |  [#29](https://github.com/alexfigtree/CoreID/issues/29)  |  


# General Notes on Project Documentation 

Documentation will be included in the project GitHub repository in an agreed format such as slides or doc or the github wiki or github issues. Documentation includes:

## Project Diagrams

Documentation will include project diagrams provided by MIT depicting key roles, interactions and workflow of the prototype applications and a brief description of how the UI and UX reflects the information contained in the diagram.

## Project Demonstrations

The demo slides and screen walkthrough video will show two key actions, namely 1. Digital signatures used to sign legal contracts and notices are publicly verifiable by use of the public key associated with a Bitcoin and/or Ethereum public blockchains address associated with the signer; and 2. Digitally signed contracts and legal notices accessible at a standard URL on the web in the form of human readable pure text files.

