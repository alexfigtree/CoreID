import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default class Header extends Component {

    render(){

        return (
			<header className="navbar">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						CoreID
					</Link>
				</div>
				<div className="navbar-collapse"></div>

			</header>
        );
    }

}
