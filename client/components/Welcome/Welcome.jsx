import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
<meta name="viewport" content="width=device-width" />



var Welcome = React.createClass({ 


    render(){
        var style = { backgroundImage: 'url(https://picload.org/image/raorapid/front_page.jpg)', 
                      height: '100%', 
                      width: '100%', 
                      top: '0px',
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'right top', 
                      backgroundSize: 'cover',
                      position: 'absolute'};

        return (
            <div>
                <div style={style}>
                    <div className="welcome-text">
                        <h1> Welcome to the Rscript.Market</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <p> During this beta everything is free!</p>
                    </div>
                    <div className="welcome-text" style={{marginTop:'40px'}}>
                    </div>
                    <div className="welcomeBoard">
                        <div className="welcome-info-header">
                            <p> BETA TEST Awards </p>
                        </div>
                        <div className='welcome-info'>
                            <p> To make the BETA launch a bit more exciting, we are giving away 150$ for the 5 best items created until 9th of january 2017. More information below.</p>
                        </div>
                        <div style={{textAlign:"center"}} className="welcome-info-header">
                            <RaisedButton label="More Info" href="/ProductContent/-KYiHgYGx6V5mL4uiQed" style={{}} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

});

module.exports = Welcome;


