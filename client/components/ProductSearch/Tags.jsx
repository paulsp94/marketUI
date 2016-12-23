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
    selectfield_value: 'Sort',
    };

    handleChange = (event, index, selectfield_value) => this.setState({selectfield_value});
    render(){

        return (
            <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Shiny & Web" primary={true} style={{width:'130px',height:'45px'}} /> </div>
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Machine Learning" primary={true} style={{width:'100px',marginTop:'4px',height:'40px'}} /> </div>            
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Big Data" primary={true} style={{width:'100px',height:'45px'}} />   </div>           
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Algorithms" primary={true} style={{width:'100px',height:'45px'}} />   </div>                
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Graphics"  primary={true} style={{width:'100px',height:'45px'}} />    </div>           
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-4"><FlatButton label="Other" primary={true} style={{width:'100px',height:'45px'}} />    </div>               
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-6" >
                   <TextField hintText={'Search Product'} hintStyle={{color:'rgb(0, 188, 212)'}} onChange={this.searchFilter.bind(this)}  style={{marginLeft:'15px',width:'130px',color:'rgb(0, 188, 212)',fontSize:'16px',fontWeight:'100'}} /></div>  
                <div className="col-md-1" style={{width:'80px'}}></div>
                <div className="col-md-1 col-lg-1 col-sm-3 col-xs-6" ><SelectField 
                        value={this.state.selectfield_value}
                        onChange={this.handleChange.bind(this)}
                        style={{width:'140px'}}
                          >
                        <MenuItem value={'New'} primaryText="New" />
                        <MenuItem value={'Last Day'} primaryText="Last Day" />
                        <MenuItem value={'1 Week old'} primaryText="1 Week old" />
                        <MenuItem value={'1 Month old'} primaryText="1 Month old" />
                        <MenuItem value={'1 Year old'} primaryText="1 Year old" />
                      </SelectField>
                 </div>   
            </div>
        )
    }
}

export default Tags;



