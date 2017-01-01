import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
<meta name="viewport" content="width=device-width" />

var Welcome = React.createClass({ 


    render(){
        var style = { backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2Ffront_page.jpg?alt=media&token=da6f7138-bb1d-46b3-936d-d2bfa278e01c)', 
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
                        <h1> Welcome to R.Codes</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <br/>
                         <Link to="/market" className="">
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
                            <p> To make the beta launch a bit more exciting, we are giving away 150$ for the 3 best items created until 9th of january 2017. More information below.</p>
                        </div>
                        <div style={{textAlign:"center"}} className="welcome-info-header">
                        <Link to="/MoreInfo" className="">
                            <RaisedButton label="More Info" style={{}} />
                        </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

});

module.exports = Welcome;


