import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
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
            value: 1,
        };
    }

    searchFilter(event){
        this.props.onUpdateFilter(event.target.value.substr(0,20));
    }

    render(){

        return (
            <div className="tags">
            <Flexbox flexDirection="row">
              <Flexbox flexGrow={1} flexShrink={1}>
                            <RaisedButton label="Shiny & Web" style={{margin: 3, width: "100%"}} primary={true} />
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <RaisedButton label="Machine Learning" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                             <RaisedButton label="Big Data" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <RaisedButton label="Algorithms" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <RaisedButton label="Graphics" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <RaisedButton label="Other" style={{margin: 3, width: "100%"}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                   <input type="text" className="search" placeholder="Search Product" onChange={this.searchFilter.bind(this)}/>
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
                   </Flexbox>
        </Flexbox>
                
            </div>
        )
    }
}

export default Tags;



