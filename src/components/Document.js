import React, { Component } from 'react';

import documents from '../../data/documents.json';

console.log(documents);

export default class Document extends Component {
  render(){
    let documentId = parseInt(this.props.match.params.id);
    let document = documents.payload[documentId] || {};
    console.log(documentId, document);
        return (
            <div>
            <h2>Document {documentId}</h2>
            <blockquote>{document.content}</blockquote>
            <h3> <button type="submit" className="btn btn-wide btn-o btn-primary" onClick={() => { alert(documentId) }}>Sign</button></h3>
            <pre>
            {JSON.stringify(document, null, '  ')}
            </pre>
          </div>
        )
    }
}
