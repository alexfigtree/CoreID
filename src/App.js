import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

// Claims
import claims from '../data/claims.json'
import documents from '../data/documents.json'

// Sidebar
var Sidebar = React.createFactory(require('./components/Sidebar.js'));

// Header
var Header = React.createFactory(require('./components/Header.js'));

// NavBar
var NavBar = React.createFactory(require('./components/NavBar.js'));


console.log(claims, documents)

import logo from './logo.svg';

import './App.css';
import './themify-icons/themify-icons.css'

class App extends Component {

    render() {
        return (
            <Router>
                <div id='app' className='App'>

                    <Sidebar/>
                    <div className='app-content'>
                        <Header/>
                        <NavBar/>
                        <div className="main-content">
                            <Route exact path='/' component={Index} />
                            <Route path='/sandbox' component={Sandbox} />
                            <Route path='/documents' component={Documents} />
                            <Route path='/identity' component={Identity} />
                            <Route path='/signatures' component={Signatures} />
                        </div>
                    </div>

                </div>

            </Router>
        )
    }

  renderClaim (claim) {
    return (
        <h3><tt>{JSON.stringify(claim.payload)}</tt></h3>
    )
  }

  renderClaims () {
    return (
        <div className='claims-container'>
        { claims.payload.map(claim => this.renderClaim(claim)) }
        </div>
    )
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

  renderAttestation () {
    return (
        <div itemscope itemtype='http://schema.org/Person'>
        <span itemprop='name'>Name:<input /></span>
        <span itemprop='jobTitle'>jobTitle: <input /></span>
        <div itemprop='address' itemscope itemtype='http://schema.org/PostalAddress'>
        <span itemprop='streetAddress'>streetAddress: <input />
      </span>
        <span itemprop='addressLocality'>addressLocality (city): <input /></span>,
        <span itemprop='addressRegion'>addressRegion (city): <input /></span>
        <span itemprop='postalCode'>postalCode: <input /></span>
        </div>
        <span itemprop='telephone'>telephone: <input /></span>
        <a href='mailto:' itemprop='email'>email:
        <input />
        </a>
        <a href='http://www.janedoe.com' itemprop='url'>url: <input /></a>
        </div>
    )
  }

  render() {
    return (
        <div id='app' className='App'>
          
          { Sidebar() }
          <div className='app-content'>
            { Header() }
            { NavBar() }

            <div className="main-content">
              <h1>Core Identity</h1>
              <h2>Dashboard</h2>
              <h2>Profile</h2>
              <h2>Login</h2>
              <h2>Identity Attributes / Claims</h2>
              { this.renderClaims() }
              <h2>Documents</h2>
              { this.renderDocuments() }
              <h2>Attestation: Person</h2>
              { this.renderAttestation() }
            </div>
          </div>
        
        </div>
    )
  }
}

export default App;
