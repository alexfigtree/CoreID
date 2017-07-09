import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import Index from './Dashboard/index';
import Sandbox from './components/Sandbox';
import Profile from './components/Profile';
import Documents from './components/Documents';
import Signatures from './components/Signatures';

import Document from './components/Document';
import Claim from './components/Claim';
import Claims from './components/Claims';
import ClaimsCreate from './components/ClaimsCreate';

import Sidebar from './components/Sidebar';
import Header from'./components/Header';
import NavBar from './components/NavBar';

import jsonfile from 'jsonfile'

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
                            <Route exact path='/' component={Documents} />
                            <Route path='/sandbox' component={Sandbox} />
                            <Route path='/documents' component={Documents} />
                            <Route path='/document/:id' component={Document} />
                            <Route path='/claim/:id' component={Claim} />
                            <Route path='/profile' component={Profile} />
                            <Route path='/signatures' component={Signatures} />
                            <Route path='/claims' component={Claims} />
                            <Route path='/claim-create' component={ClaimsCreate} />
                        </div>
                    </div>

                </div>

            </Router>
        )
    }

}

export default App;
