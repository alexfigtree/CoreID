import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import claims from '../../data/claims.json';
import bitcoin from 'bitcoin'
import crypto from 'crypto'

export default class Claim extends Component {

    signClaim(claim){
      var signedBy = "Alice"
      console.log(claim)
      var client = new bitcoin.Client({
        host: 'localhost',
        port: '8081/bitcoind',
        user: 'user',
        pass: 'pass'
      })
      var address = 'mfktUYX4YPoiPuxNJujk7uJLM1ZcN16JbG'
      var shasum = crypto.createHash('sha256')
      var jsonObject = claim
      for (var key in claim){
        if(key.toString() != "signedBy" && key.toString() != "signed" && key.toString() != "signedDate" && key.toString() != "rejected" && key.toString() != "signatures" && key.toString() != "verifiedBy"){
          console.log(claim[key].toString(), key)
          if(key == "payload"){
            for(var payloadkey in claim[key]){
              console.log(payloadkey)
              shasum.update(Buffer.from(claim[key][payloadkey].toString()))
            }
          }else{
            shasum.update(Buffer.from(claim[key].toString()))
          }

        }
      }
      var hashedvalues = shasum.digest('hex')
      console.log(hashedvalues)
      client.signMessage(address, hashedvalues, function(err,signature){
        console.log(signature)
        console.log(address)
        console.log(jsonObject)
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
    	let claimId = parseInt(this.props.match.params.id);
     	let claim = claims.payload[claimId] || {};
    	console.log(claimId, claim);
		return (
			<div className="col-md-12">
                <h1>Claim: {claim.payload.fact}</h1>
                
                <div className='column-left col-md-6'>

		            <h4> Signed: {claim.verified ? 'Yes' : 'No'} </h4>
	                <h4> Signed Date: {claim.signedDate} </h4>
	                <h4> Signed By: {claim.signedBy} </h4>
	                <h4> Validated: {claim.validated ? 'Yes' : 'No'} </h4>
	                <h4> Verified By: {claim.verifiedBy} </h4>
	                <h4> Rejected: {claim.rejected ? 'Yes' : 'No'} </h4>

	                <h2 className="">Statement of Intent:</h2>
	                <p>
		                <h5><input type="checkbox"/> I certify that...</h5>
		                <h5><input type="checkbox"/> I understand that this is a...</h5>
		                <h5><input type="checkbox"/> I authorize my...</h5>
		            </p>

	      	        <h3 className="btn-row"> 
	                    <button type="back" className="btn btn-wide btn-o btn-primary back-btn">
	                        <Link to="/claims" rel="nofollow noopener noreferrer">
	                            Back
	                        </Link>
	                     </button>
	                    <button 
	                    	type="submit" 
	                    	className="btn btn-wide btn-o btn-primary" 
	                    	onClick={() => { 
	                    		confirm('Are you sure you want to sign or send ' + claim.payload.fact + '?'); this.signClaim(claim) 
	                    	}}>
	                    		Sign / Send
	                    </button>
	                </h3>  
	            </div>    
          	</div>
		)
    }
}
