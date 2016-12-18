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
                        <p> or share your own expertise</p>
                    </div>
                    <div className="welcome-text" style={{marginTop:'40px'}}>
                    </div>
                    <div className="welcomeBoard">
                        <div className="welcome-info-header">
                            <p> free item of the month </p>
                        </div>
                        <div className='welcome-info'>
                            <p> Learn to create 3D animated density maps (as seen on the right) by connecting R to Cinema 4D. All tools and techniques are explained in the tutorial. Available until 1-1-2017.</p>
                        </div>
                        <div style={{textAlign:"center"}} className="welcome-info-header">
                            <RaisedButton label="Download" href="/ProductContent/-KYiHgYGx6V5mL4uiQed" style={{}} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

});

module.exports = Welcome;


