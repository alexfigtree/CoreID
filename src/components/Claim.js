import React, { Component } from 'react';

import claims from '../../data/claims.json';

export default class Claim extends Component {
    render(){
    	let claimId = parseInt(this.props.match.params.id);
     	let claim = claims.payload[claimId] || {};
    	console.log(claimId, claim);
		return (
			<div>
	            <h1>Claim: {claim.payload.fact} </h1>
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
	            <h3> <button type="submit" className="btn btn-wide btn-o btn-primary" onClick={() => { alert('Are you sure you want to sign or send ' + claim.payload.fact + '?') }}>Sign / Send</button></h3>
          	</div>
		)
    }
}