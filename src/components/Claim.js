import React, { Component } from 'react';

import claims from '../../data/claims.json';

export default class Claim extends Component {
    render(){
      let claimId = parseInt(this.props.match.params.id);
      return (
            <div>
            <h2>Document {claimId}</h2>
          </div>
        )
    }
}
