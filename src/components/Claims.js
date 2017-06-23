import React, { Component } from 'react';

import claims from '../../data/claims.json';

import '../App.css';
import '../themify-icons/themify-icons.css';
import './Claims.css';

export default class Claims extends Component {
    render() {
        return (
            <div>
                { this.renderForm() }
                <h2>Create Attestation</h2>
                { this.renderClaims() }
            </div>
        );
    }

    handleClaimClick(e) {
        console.log(e);
    }

    renderClaim (claim) {
        return (
            <div>
                <h3>{claim.payload['fact'] || 'Claim'}</h3>
                <pre>{JSON.stringify(claim.payload, null, '  ')}</pre>
            </div>
        )
    }

    renderClaims () {
        return (
            <div className='claims-container'>
                { claims.payload.map(claim => this.renderClaim(claim)) }
            </div>
        )
    }

    renderForm() {
        return (
            <div className="container-fluid container-fullw bg-white ng-scope">
                <div className="col-md-12">
                    <h5 className="over-title">Create Attestation</h5>
                    <p className="margin-bottom-30">
                        This is your claims and attestations section.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>
                                    Address
                                </legend>
                                <div className="form-group">
                                    <label>
                                        Fact <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                    <label>
                                        Time <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                    <label>
                                        Address <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Your Account
                                </legend>
                                <div className="form-group">
                                    <label>
                                        E-mail <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6">
                            <fieldset>
                                <legend>
                                    Personal Information
                                </legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>
                                                First Name <span className="symbol required"></span>
                                            </label>
                                            <div className="form-group">
                                                <input type="email" placeholder="Text Field" name="firstname" className="form-control"/>
                                            </div>
                                            <label>
                                                Last Name <span className="symbol required"></span>
                                            </label>
                                            <div className="form-group">
                                                <input type="email" placeholder="Text Field" name="lastname" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="block">
                                                Gender
                                            </label>
                                            <div className="clip-radio radio-primary">
                                                <input type="radio" id="female" name="gender" value="male"/>
                                                <label for="male">
                                                    Male
                                                </label>
                                                <input type="radio" id="male" name="gender" value="female" checked="checked"/>
                                                <label for="female">
                                                     <span> Female</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Choose your country or region
                                            </label>
                                            <select name="country" className="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    FICO Score
                                </legend>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="checkbox-inline clip-check">
                                                <input type="checkbox" name="newsletter"/>
                                                <i></i>
                                                <a href="#">Verify FICO score</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-wide btn-o btn-primary">Save</button>
                </div>
            </div>    

        )
    }

}
