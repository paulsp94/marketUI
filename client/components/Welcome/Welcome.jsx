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
                            <h4> Beta Test Awards </h4>
                        </div>
                        <div className='welcome-info'>
                            <p> To make the beta launch a bit more exciting, we are giving away 150$ for the 3 best items created until 22th of january 2017. More information below.</p>
                        </div>
                        <div style={{textAlign:"center"}} className="welcome-info-header">
                        <Link to="/MoreInfo" className="">
                            <RaisedButton label="More Info" style={{marginBottom: 1}} />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Welcome;


