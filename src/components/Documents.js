import React, { Component } from 'react';

import documents from '../../data/documents.json';

export default class Documents extends Component {
    render(){
        return (
            <div>
              <h2>Documents</h2>
                { this.renderDocuments() }
            </div>
        );
    }

    renderDocument (document) {
        return (
            <h3>{document.title}</h3>
        )
    }

    renderDocuments () {
        return (
            <div className='documents-container'>
                { documents.payload.map((document) => this.renderDocument(document)) }
            </div>
        )
    }

}
