import React, { Component } from 'react';

import '../App.css';
import '../themify-icons/themify-icons.css';
import './Claims.css';


export default class ClaimsCreate extends Component {
    render() {
        return (
            <div className="container-fluid container-fullw bg-white ng-scope">
                { this.renderForm() }
                
            </div>
        );

    }

    renderForm() {
        return (
            <div className="container-fluid container-fullw bg-white ng-scope">
                <div className="col-md-12">
                    <h5 className="over-title">Create Attestation</h5>
                    <p className="margin-bottom-30">
                        This is your claims and attestations section.
                    </p>
                    <fieldset>
                        <legend>Claim Type</legend>
                        <select name="attestation" className="form-control">
                            <option value="">Select One</option> 
                            <option value="">Address</option>
                            <option value="">Preference</option>
                            <option value="">Email</option>
                            <option value="">Name</option>
                            <option value="">Verfication of Employment</option>
                            <option value="">Verification of Income</option>
                            <option value="">Verification of Insurance</option>
                            <option value="">Other</option>
                        </select>
                    </fieldset>      
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>
                                    Address
                                </legend>
                                <div className="form-group">
                                    <label>
                                        Street <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                    <label>
                                        Town <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                    <label>
                                        Zip Code <span className="symbol required"></span>
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                    <label>
                                        Choose your state or region: 
                                    </label>
                                    <select name="state" className="form-control cs-placeholder">
                                        <option value="" className="icon-arrow">Unselected</option>
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
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Preference
                                </legend>
                                <div className="form-group">
                                    <label>
                                        Preference Name
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Preference Value
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Email
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
                            <fieldset>
                                <legend>
                                    Name
                                </legend>
                                <div className="form-group">
                                    <label>
                                        Name
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Other
                                </legend>
                                <div className="form-group">
                                    <label>
                                        Claim Type
                                    </label>
                                    <div className="form-group">
                                        <input type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Text Field
                                    </label>
                                    <div className="form-group">
                                        <textArea type="email" placeholder="Text Field" name="email" id="email" className="form-control"/>
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
