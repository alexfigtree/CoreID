import React, { Component } from 'react';

// require('../Shared/signing');

import claims from '../../data/claims.json';

export default class Identity extends Component {
    render() {
        return (
            <div>
                <h2>Identity Attributes / Claims</h2>
                { this.renderClaims() }
            </div>
        );
    }

    handleClaimClick(e) {
        console.log(e);
    }

    renderClaim (claim) {
        return (
            <div>
                <h3>{claim.payload['fact'] || 'Claim'}</h3>

                <pre>{JSON.stringify(claim.payload, null, '  ')}</pre>
            </div>
        )
    }

    renderClaims () {
        return (
            <div className='claims-container'>
                { claims.payload.map(claim => this.renderClaim(claim)) }
            </div>
        )
    }

}
