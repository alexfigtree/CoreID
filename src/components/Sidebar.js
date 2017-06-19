var React = require('react');

var Sidebar = React.createClass({

	render(){

		return (
			<div id='sidebar' className='sidebar app-aside'>
				<div className='sidebar-container'>
					<nav>
						<ul className="main-navigation-menu">

							<li>
								<a href="#">
									<div className="item-content">
										<div className="item-media">
											<i className="ti-user"></i>
										</div>
										<div className="item-inner">
											<span className="title">Identity Attributes</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
								<ul className="sub-menu">
									<li>
										<a href="#">
											<span className="title">Login Form</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="title">Registration Form</span>
										</a>
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
								<a href="#">
									<div className="item-content">
										<div className="item-media">
											<i className="ti-layers-alt"></i>
										</div>
										<div className="item-inner">
											<span className="title ng-scope">Documents</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
							</li>

							<li>
								<a href="#">
									<div className="item-content">
										<div className="item-media">
											<i className="ti-pencil-alt"></i>
										</div>
										<div className="item-inner">
											<span className="title">Signatures</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
							</li>

							<li>
								<a href='#'>
									<div className="item-content">
										<div className="item-media">
											<i className="ti-layout-grid2"></i>
										</div>
										<div className="item-inner">
											<span className="title ng-scope">Tables</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
								<ul className="sub-menu">
									<li>
										<a href="#/app/table/basic">
											<span className="title">Basic Tables</span>
										</a>
									</li>
									<li>
										<a href="#/app/table/responsive">
											<span className="title">Responsive Tables</span>
										</a>
									</li>
									<li>
										<a href="#/app/table/dynamic">
											<span className="title">Dynamic Tables</span>
										</a>
									</li>
									<li>
										<a href="#/app/table/data">
											<span className="title">ngTable</span>
										</a>
									</li>
								</ul>
							</li>

							<li className="open active">
								<a href="#">
									<div className="item-content">
										<div className="item-media">
											<i className="ti-layout-grid2"></i>
										</div>
										<div className="item-inner">
											<span className="title">Transactions</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
								<ul className="sub-menu">
									<li className="active">
										<a href="#/app/form/elements">
											<span className="title">Create</span>
										</a>
									</li>
									<li>
										<a href="#/app/form/xeditable">
											<span className="title">Pending</span>
										</a>
									</li>
									<li>
										<a href="#/app/form/editor">
											<span className="title">Completed</span>
										</a>
									</li>

								</ul>
							</li>

							<li>
								<a href="javascript:void(0)">
									<div className="item-content">
										<div className="item-media">
											<i className="ti-shift-right"></i>
										</div>
										<div className="item-inner">
											<span className="title ng-scope">Logout</span><i className="icon-arrow"></i>
										</div>
									</div>
								</a>
							</li>

						</ul>

					</nav>

				</div>	
			</div>
		);
	}

});

module.exports = Sidebar;
