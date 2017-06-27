import React, { Component } from 'react';

import claims from '../../data/claims.json';

export default class Claim extends Component {
    render(){
    	let claimId = parseInt(this.props.match.params.id);
     	let claim = claims.payload[claimId] || {};
    	console.log(claimId, claim);
		return (
			<div>
	            <h2>Claim: {claim.payload.fact} </h2>
	            <h4> Signed: {claim.verified ? 'Yes' : 'No'} </h4>
                <h4> Signed Date: {claim.signedDate} </h4>
                <h4> Signed By: {claim.signedBy} </h4>
                <h4> Validated: {claim.validated ? 'Yes' : 'No'} </h4>
                <h4> Verified By: {claim.verifiedBy} </h4>
                <h4> Rejected: {claim.rejected ? 'Yes' : 'No'} </h4>
	            <h3> <button type="submit" className="btn btn-wide btn-o btn-primary" onClick={() => { alert(claimId) }}>Sign / Send</button></h3>
          	</div>
		)
    }
}