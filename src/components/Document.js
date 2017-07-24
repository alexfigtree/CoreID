import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import documents from '../../data/documents.json';
import bitcoin from 'bitcoin'
import crypto from 'crypto'


console.log(documents);

export default class Document extends Component {

  signDocument(document){
    var signedBy = "Alice"
    console.log(document)
    var client = new bitcoin.Client({
      host: 'localhost',
      port: '8081/bitcoind',
      user: 'user',
      pass: 'pass'
    })
    var address = 'mfktUYX4YPoiPuxNJujk7uJLM1ZcN16JbG'
    var shasum = crypto.createHash('sha256')
    var jsonObject = document
    for (var key in document){

      if((key.toString() != "signedBy" && key.toString() != "signed" && key.toString() != "signedDate" && key.toString() != "rejected" && key.toString() != "signatures" && key.toString() != "verifiedBy")){
        console.log(document[key].toString())
        shasum.update(Buffer.from(document[key].toString()))
      }
    }
    var hashedvalues = shasum.digest('hex')
    console.log(hashedvalues)
    client.signMessage(address, hashedvalues, function(err, signature){
      console.log(signature)
      console.log(address)
      alert("address: "+ address + "\n" + "signature: "+ signature+ "\n" + "Hashed payload: "+ hashedvalues)
      jsonObject.signatures.push({"address": address, "signature": signature, "Hashed payload": hashedvalues})
      jsonObject.signed = true
      jsonObject.signedBy = signedBy

    })
    return(
      jsonObject
    )

  }
  render(){
    let documentId = parseInt(this.props.match.params.id);
    let document = documents.payload[documentId] || {};

    console.log(documentId, document);
        return (
            <div className="col-md-12">
                <h1>Document: {document.title}</h1>
                <div className='column-left col-md-6'>
                    <h4> Lender: {document.lender} </h4>
                    <h4> Date Added: {document.dateAdded} </h4>
                    <h4> Type: {document.type} </h4>
                    <h4> Signed By: {document.signedBy} </h4>
                    <h4> Content: </h4>
                    <blockquote className="">{document.content}</blockquote>
                    <h3 className="btn-row"> 
                        <button type="back" className="btn btn-wide btn-o btn-primary back-btn">
                            <Link to="/documents" rel="nofollow noopener noreferrer">
                                Back
                            </Link>
                         </button>
                        <button 
                            type="submit" 
                            className="btn btn-wide btn-o btn-primary" 
                            onClick={() => { 
                                confirm('Are you sure you want to sign ' + document.title + '?'); this.signDocument(document) 
                            }}>
                            Sign
                        </button>
                    </h3>    
                </div>
                
            </div>

        )
    }
}
