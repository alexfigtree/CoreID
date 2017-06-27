import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

import './Header.css';

export default class Header extends Component {

    render(){
        return (
			<header className="navbar">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						DCU
					</Link>
					<div className="dropdown current-user">
						<a href="" className="dropdown-toggle" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
							<span className="username ng-binding">Alice <i className="ti-angle-down"></i></span>
						</a>
					</div>
				</div>
			</header>
        );
    }

}
