import React, { Component } from 'react';

import documents from '../../data/documents.json';

console.log(documents);

export default class Document extends Component {
  render(){
    let documentId = parseInt(this.props.match.params.id);
    let document = documents.payload[documentId] || {};
    console.log(documentId, document);
        return (
            <div className="col-md-12">
                <h2>Document: {document.title}</h2>
                <div className='column-left col-md-6'>
                    <h4> Lender: {document.lender} </h4>
                    <h4> Date Added: {document.dateAdded} </h4>
                    <h4> Type: {document.type} </h4>
                    <h4> Signed By: {document.signedBy} </h4>
                    <h4> Content: </h4>
                    <blockquote className="">{document.content}</blockquote>    
                </div>

                <h3> <button type="submit" className="btn btn-wide btn-o btn-primary" onClick={() => { alert('Are you sure you want to sign this document?') }}>Sign</button></h3>
            </div>
        )
    }
}
