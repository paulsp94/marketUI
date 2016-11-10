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


class Tags extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    render(){

        return (
            <div className="tags">
                <RaisedButton label="Tag1" style={{ margin: 3}} />
                <RaisedButton label="Tag2" style={{ margin: 3}} />
                <RaisedButton label="Tag3" style={{ margin: 3}} />
                <RaisedButton label="Tag4" style={{ margin: 3}} />
                <RaisedButton label="Tag5" style={{ margin: 3}} />
                <RaisedButton label="Tag6" style={{ margin: 3}} />
                <RaisedButton label="Tag7" style={{ margin: 3}} />
                <RaisedButton label="Tag8" style={{ margin: 3}} />
            </div>
        )
    }
}

export default Tags;



