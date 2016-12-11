import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Flexbox from 'flexbox-react';


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
            <MuiThemeProvider>
            <div>
                <Header/>
                <div style={style}>
                    <div className="welcome-text">
                        <h1> Welcome to the Rscript.Market</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <p> We are now available in 25 countries! </p>
                    </div>
                    <div className="welcome-text" style={{marginTop:'40px'}}>
                        <RaisedButton href="/ProductSearch" label='explore' style={{marginRight: '5px'}} /> 
                    </div>
                    <div className='welcome-info'>
                        <p> this graphic was created <br/> with R and C4D</p>
                    </div>
                </div>
                
            </div>
            </MuiThemeProvider>
        )
    }

});

module.exports = Welcome;


