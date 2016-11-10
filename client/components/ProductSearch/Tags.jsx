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
import Flexbox from 'flexbox-react';



class Tags extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    render(){

        return (
            <div className="tags">
            <Flexbox flexDirection="row">
              <Flexbox flexGrow={1}>
                            <RaisedButton label="Shiny & Web" style={{margin: 3, width: "100%"}} primary={true} />
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <RaisedButton label="Machine Learning" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1}>
                             <RaisedButton label="Big Data" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <RaisedButton label="Algorithms" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <RaisedButton label="Graphics" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <RaisedButton label="Maps" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <RaisedButton label="Other" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
        </Flexbox>
                
            </div>
        )
    }
}

export default Tags;



