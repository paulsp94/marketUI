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
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
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

    state = {
    selectfield_value: 'New',
    };

    handleChange = (event, index, selectfield_value) => this.setState({selectfield_value});
    render(){

        return (
            <div className="tags">
            <Flexbox flexDirection="row">
              <Flexbox flexGrow={1} flexShrink={1} style={{height:'45px'}}>
                            <FlatButton label="Shiny & Web" style={{margin: 3, width: "100%",height:'100%',}} primary={true} />
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton label="Machine Learning" style={{margin: 3, width: "100%",height:'45px'}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                             <FlatButton label="Big Data" style={{margin: 3, width: "100%",height:'45px'}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton label="Algorithms" style={{margin: 3, width: "100%",height:'45px'}} primary={true} />                   
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton label="Graphics" style={{margin: 3, width: "100%",height:'45px'}} primary={true} />                   
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton label="Other" style={{margin: 3, width: "100%",height:'45px'}} primary={true} />                   
              </Flexbox>
              
                  <Flexbox flexGrow={1} flexShrink={1}>
                   <TextField hintText={'Search Product'} hintStyle={{color:'rgb(0, 188, 212)'}} onChange={this.searchFilter.bind(this)} className={'search'} style={{color:'rgb(0, 188, 212)',fontSize:'16px',fontWeight:'100',width:'140px',height:'45px',marginTop:'4px'}}/>
                    <SelectField className={''} 
                        value={this.state.selectfield_value}
                        onChange={this.handleChange.bind(this)}
                        style={{height:'45px',marginTop:'4px',marginLeft:'13px',width:'150px'}}
                      >
                        <MenuItem value={'New'} primaryText="New" />
                        <MenuItem value={'Last Day'} primaryText="Last Day" />
                        <MenuItem value={'1 Week old'} primaryText="1 Week old" />
                        <MenuItem value={'1 Month old'} primaryText="1 Month old" />
                        <MenuItem value={'1 Year old'} primaryText="1 Year old" />
                      </SelectField>
                   </Flexbox>
        </Flexbox>
                
            </div>
        )
    }
}

export default Tags;



