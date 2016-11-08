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
import ReactMarkdown from 'react-markdown';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';


class  ProductSearch extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    render(){

        return (
            <MuiThemeProvider>
                <div className="background">
                    <div className="container-search">
                     <Header/>

                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ProductSearch;



