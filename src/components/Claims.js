import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import claims from '../../data/claims.json';

import '../App.css';
import '../themify-icons/themify-icons.css';
import './Claims.css';


export default class Claims extends Component {
    render() {

    let payload = claims.payload;   

    console.log(payload);

    payload.map((claim, i) => console.log(claim))
     
        return (
            <div className="container-fluid container-fullw bg-white ng-scope">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="over-title margin-bottom-15">
                            <span className="text-bold">Claims</span>
                            <Link title="Create a New Claim" className="ti-plus icon-yes" to={`/claim-create`} rel="nofollow noopener noreferrer">
                            </Link>
                        </h5>
                        <p>
                            Find all claims for transactions below.
                        </p>
                        <table className="table table-hover" id="sample-table-1">
                            <thead>
                                <tr>
                                    <th className="sortable">Claim/Attestation</th>
                                    <th className="hidden-xs">Date Added</th>
                                    <th className="hidden-xs">Date Signed</th>
                                    <th className="hidden-xs">Signed By</th>
                                    <th className="hidden-xs">Verified By</th>
                                    <th className="hidden-xs">Status</th>
                                    <th className="hidden-xs">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
  {
    payload.map((claim, i) => (
        <tr key={i}>
                                    <td>
                                        <Link to={`/claim/${i}`} rel="nofollow noopener noreferrer">
        {claim.payload.fact}
                                        </Link>
                                    </td>
        <td className="hidden-xs">{claim.payload.DateTime}</td>
                                    <td>{claim.signedDate}</td>
                                    <td>{claim.signedBy}</td>
                                    <td>{claim.verifiedBy}</td>
                                    <td>N/A</td>
                                    <td className="center">
                                        <div className="visible-md visible-lg hidden-sm hidden-xs">
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Share"><i className="ti-control-forward"></i></a>
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Remove"><i className="ti-close"></i></a>
                                        </div>
                                    </td>
                                </tr>

        ))
      }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );

    }

    handleClaimClick(e) {
        console.log(e);
    }


    renderClaims () {
        return (
            <div className='claims-container'>
                { claims.payload.map(claim => this.renderClaim(claim)) }
            </div>
        )
    }

}
