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


class Search extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    render(){

        return (
            <MuiThemeProvider>
                <div>
                   <input type="text" className="search" placeholder="Search Product"/>
                   <select className="sort">
                       <optgroup label="Sort">
                           <option value=""> Sort </option>
                           <option value="New"> New </option>
                           <option value="Last Day"> Last Day </option>
                           <option value="1 week old"> 1 week old </option>
                           <option value="1 Month old"> 1 Month old</option>
                           <option value="1 Year old"> 1 Year old </option>
                       </optgroup>
                   </select>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Search;



