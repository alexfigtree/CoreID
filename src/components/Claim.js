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
	            <blockquote>{claim.content}</blockquote>
	            <h3> <button type="submit" className="btn btn-wide btn-o btn-primary" onClick={() => { alert(claimId) }}>Sign</button></h3>
	            <pre>
	            {JSON.stringify(claim, null, '  ')}
	            </pre>
          	</div>
		)
    }
}