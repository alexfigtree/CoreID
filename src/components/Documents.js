import React, { Component } from 'react';

import documents from '../../data/documents.json';

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
                                    <th>Document</th>
                                    <th className="hidden-xs">Created</th>
                                    <th>From</th>
                                    <th className="hidden-xs">Signed</th>
                                    <th>Approved</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="center"><input type="checkbox"/></td>
                                    <td>
                                        <a href="#" rel="nofollow noopener noreferrer" target="_blank">
                                            Blanket Authorization Form
                                        </a>
                                    </td>
                                    <td>04-01-2017</td>
                                    <td>Core Credit Union</td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-close icon-no"/>
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
                                            Closing Package - Promissory Note
                                        </a>
                                    </td>
                                    <td className="hidden-xs">01-01-2017</td>
                                    <td>CCU - 2</td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-close icon-no"/>
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
                                            Closing Package - Confirmation of Deposits, Employment, Credit History
                                        </a>
                                    </td>
                                    <td className="hidden-xs">01-01-2017</td>
                                    <td>3rd Party</td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-check icon-yes"/>
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
                                            Closing Package - Compliance Agreement
                                        </a>
                                    </td>
                                    <td className="hidden-xs">01-01-2016</td>
                                    <td>Core Credit Union</td>
                                    <td className="hidden-xs ti-close icon-no"/>
                                    <td className="hidden-xs ti-check icon-yes"/>
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
                                            Initial Disclosure
                                        </a>
                                    </td>
                                    <td className="hidden-xs">03-01-2017</td>
                                    <td>Core Credit Union</td>
                                    <td className="hidden-xs ti-close icon-no"/>
                                    <td className="hidden-xs ti-close icon-no"/>
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
                                            Contract 4
                                        </a>
                                    </td>
                                    <td className="hidden-xs">04-01-2017</td>
                                    <td>3rd Party</td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-check icon-yes"/>
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
                                            Disclosure 1
                                        </a>
                                    </td>
                                    <td className="hidden-xs">04-15-2017</td>
                                    <td>Core Credit Union</td>
                                    <td className="hidden-xs ti-check icon-yes"/>
                                    <td className="hidden-xs ti-close icon-no"/>
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
