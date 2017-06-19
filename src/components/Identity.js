import React, { Component } from 'react';

import claims from '../../data/claims.json';

export default class Identity extends Component {
    render(){
        return (
            <div>
              <h2>Identity Attributes / Claims</h2>
                { this.renderClaims() }
            </div>
        );
    }

    renderClaim (claim) {
        return (
            <h3><tt>{JSON.stringify(claim.payload)}</tt></h3>
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
