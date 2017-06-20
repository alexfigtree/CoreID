import React, { Component } from 'react';

import claims from '../../data/claims.json';
import documents from '../../data/payload.json';

console.log(claims, documents);


import Sidebar from './Sidebar';
import Header from'./Header';
import NavBar from './NavBar';

import logo from '../logo.svg';
import '../App.css';
import '../themify-icons/themify-icons.css';

export default class Index extends Component {
    render() {
        return (
            <div>
                <h2>Identity Attributes / Claims</h2>
                { this.renderClaims() }
                <h2>Documents</h2>
                { this.renderDocuments() }
                <h2>Attestation: Person</h2>
                { this.renderAttestation() }
            </div>
        )
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

    renderDocument (document) {
        return (
            <h3>{JSON.stringify(document)}</h3>
        )
    }

    renderDocuments () {
        return (
            <div className='documents-container'>
                { documents.entries.map((document) => this.renderDocument(document)) }
            </div>
        )
    }

    renderAttestation () {
        return (
            <div itemscope itemtype='http://schema.org/Person'>
                <span itemprop='name'>Name:<input /></span>
                <span itemprop='jobTitle'>jobTitle: <input /></span>
                <div itemprop='address' itemscope itemtype='http://schema.org/PostalAddress'>
        <span itemprop='streetAddress'>streetAddress: <input />
      </span>
                    <span itemprop='addressLocality'>addressLocality (city): <input /></span>,
                    <span itemprop='addressRegion'>addressRegion (city): <input /></span>
                    <span itemprop='postalCode'>postalCode: <input /></span>
                </div>
                <span itemprop='telephone'>telephone: <input /></span>
                <a href='mailto:' itemprop='email'>email:
                    <input />
                </a>
                <a href='http://www.janedoe.com' itemprop='url'>url: <input /></a>
            </div>
        )
    }


}
