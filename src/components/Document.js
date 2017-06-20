import React, { Component } from 'react';

import documents from '../../data/payload.json';

console.log(documents);

export default class Document extends Component {
  render(){
    let documentId = parseInt(this.props.match.params.id);
    let document = {}; // documents.payload[documentId] || {};
    console.log(documentId, document);
        return (
            <div>
            <h2>Document {documentId}</h2>
          </div>
        )
    }
}
