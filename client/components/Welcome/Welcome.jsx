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

        return (
            <MuiThemeProvider>
            <div>
                <Header/>
                <Card className="container">
                    <h2> Welcome to the Rscript.Market</h2>

                    <p> Discover the newest code snipped of the R universe </p>
                    <p> We are now available for coders in 25 countries! </p>

                    <p>-----</p>
                    <div style={{height: 50}}> <p> the last added 10 items are listed here: </p> </div>
                     <p>-----</p>
                </Card>
                
            </div>
            </MuiThemeProvider>
        )
    }

});

module.exports = Welcome;


