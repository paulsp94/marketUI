import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
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


var checkout = React.createClass({ 


    render(){

        return (
            <MuiThemeProvider>
            <div>
             	<Header/>
             	<div className="container-search">
 	             	<Card style={{padding: 0}}>

             		<h1> Placeholder for react-stripe-checkout </h1>
             		<RaisedButton label="Checkout" style={{ margin: 12}} primary={true} />
             	</Card>
             	</div>
            </div>  
            </MuiThemeProvider>
        )
    }

});

module.exports = checkout;


