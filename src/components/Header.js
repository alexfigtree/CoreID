var React = require('react');

import '../App.css';

var Header = React.createClass({

	render(){

		return (
			<header className="navbar">
				<div className="navbar-header">
					<a className="navbar-brand" href="#/app/dashboard">
						CoreID
					</a>
				</div>
				<div className="navbar-collapse"></div>

			</header>
		);
	}

});

module.exports = Header;