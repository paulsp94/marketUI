import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

var Welcome = React.createClass({

    render(){
        return (
            <div>
                <div className="backgroundImage">
                    <div className="welcome-text">
                        <h1> Welcome to R.Codes</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <br/>
                         <Link to="/Market" className="">
                            <RaisedButton label="Explore" style={{}} />
                        </Link>
                    </div>
                    <div className="welcome-text" style={{marginTop:'40px'}}>
                    </div>
                    <div className="welcomeBoard">
                        <div className="welcome-info-header" style={{padding: 2}}>
                            <h4> Announcement </h4>
                        </div>
                        <div className='welcome-info'>
                            <p > This is the last week of the R.Codes BETA. Next week we will launch several new features for the official launch. In the mean time you can join the "R Codes" facebook group. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Welcome;
