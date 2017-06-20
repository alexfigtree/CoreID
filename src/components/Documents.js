import React, { Component } from 'react';

import documents from '../../data/payload.json';

export default class Documents extends Component {
    render(){
        return (
            <div className="container-fluid container-fullw bg-white ng-scope">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="over-title margin-bottom-15">
                            <span className="text-bold">Documents/Claims</span>
                            <a href="#" className="ti-plus icon-yes"/>
                        </h5>
                        <p>
                            Find all documents/claims for transactions below.
                        </p>
                        <button type="submit" className="btn btn-wide btn-o btn-primary">
                            Sign
                        </button>
                        <table className="table table-hover" id="sample-table-1">
                            <thead>
                                <tr>
                                    <th className="center">Select</th>
                                    <th className="sortable">File Name</th>
                                    <th className="hidden-xs">Document</th>
                                    <th className="hidden-xs">Attestation</th>
                                    <th className="hidden-xs">Date Added</th>
                                    <th className="hidden-xs">Date Signed</th>
                                    <th className="hidden-xs">Verified</th>
                                    <th className="hidden-xs">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="center"><input type="checkbox"/></td>
                                    <td>
                                        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
                                            Ship-To Address
                                        </a>
                                    </td>
                                    <td className="hidden-xs ti-close icon-no"/>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs">March 7, 2016</td>
                                    <td className="hidden-xs">March 19, 2016 </td>
                                    <td className="hidden-xs">Self-Asserted </td>
                                    <td className="center">
                                        <div className="visible-md visible-lg hidden-sm hidden-xs">
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Share"><i className="ti-control-forward"></i></a>
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Remove"><i className="ti-close"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="center"><input type="checkbox"/></td>
                                    <td>
                                        <a href="#" rel="nofollow" target="_blank">
                                            Promissory Note
                                        </a>
                                    </td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-close icon-no"/>
                                    <td className="hidden-xs">April 22, 2017</td>
                                    <td className="hidden-xs">Unsigned</td>
                                    <td>No</td>
                                    <td className="center">
                                        <div className="visible-md visible-lg hidden-sm hidden-xs">
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Share"><i className="ti-control-forward"></i></a>
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Remove"><i className="ti-close"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="center"><input type="checkbox"/></td>
                                    <td>
                                        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
                                            Home Address
                                        </a>
                                    </td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-close icon-no"/>
                                    <td className="hidden-xs">February 2, 2016</td>
                                    <td>February 10, 2016</td>
                                    <td>Yes</td>
                                    <td className="center">
                                        <div className="visible-md visible-lg hidden-sm hidden-xs">
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Share"><i className="ti-control-forward"></i></a>
                                            <a href="#" className="btn btn-transparent btn-xs tooltips" tooltip-placement="top" tooltip="Remove"><i className="ti-close"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <button type="submit" className="btn btn-wide btn-o btn-primary">
                                Sign
                            </button>
                        </p>
                    </div>
                </div>
                { this.renderDocuments() }
            </div>
        );
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

}
