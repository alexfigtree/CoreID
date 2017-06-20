import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import Index from './components/Index';
import Sandbox from './components/Sandbox';
import Identity from './components/Identity';
import Documents from './components/Documents';
import Signatures from './components/Signatures';
import Claims from './components/Claims';


import Sidebar from './components/Sidebar';
import Header from'./components/Header';
import NavBar from './components/NavBar';

class App extends Component {
  let
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
                            <Route path='/claims' component={Claims} />
                        </div>
                    </div>

                </div>

            </Router>
        )
    }

}

export default App;
