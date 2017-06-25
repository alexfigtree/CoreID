import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

export default class Sidebar extends Component {
    render(){
        return (
            <div id='sidebar' className='sidebar app-aside'>
                <div className='sidebar-container'>
                    <nav>
                        <ul className="main-navigation-menu">

                            <li>
                                <Link to="/profile">
                                    <div className="item-content">
                                        <div className="item-media">
                                            <i className="ti-user"></i>
                                        </div>
                                        <div className="item-inner">
                                            <span className="title">Profile</span><i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/login">
                                            <span className="title">Login Form</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            <span className="title">Registration Form</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">Forgot Password Form</a>
                                    </li>
                                    <li>
                                        <a href="#">Lock Screen</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/documents">
                                    <div className="item-content">
                                        <div className="item-media">
                                            <i className="ti-layers-alt"></i>
                                        </div>
                                        <div className="item-inner">
                                            <span className="title">Attestations/Documents</span><i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/claims">
                                    <div className="item-content">
                                        <div className="item-media">
                                            <i className="ti-layers-alt"></i>
                                        </div>
                                        <div className="item-inner">
                                            <span className="title">Claims</span><i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/claim/:id">
                                    <div className="item-content">
                                        <div className="item-media">
                                            <i className="ti-pencil-alt"></i>
                                        </div>
                                        <div className="item-inner">
                                            <span className="title">Create Attestation</span><i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
