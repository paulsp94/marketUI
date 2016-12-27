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

    cateGoryFilter(value){
        this.props.cateGoryFilter(value);
    }


    render(){

        return (
            <div className="tags">
            <Flexbox flexDirection="row">

                <Flexbox flexGrow={1} flexShrink={1}>
                    <FlatButton onClick={this.cateGoryFilter.bind(this,"All Product")} label="All" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
                </Flexbox>

                <Flexbox flexGrow={1} flexShrink={1} style={{height:'45px'}}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this , "Shiny & Web")} label="Shiny & Web" style={{margin: 3, width: "100%",height:'100%', color:"white"}}/>
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this, "Machine Learning")} label="Machine Learning" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                             <FlatButton onClick={this.cateGoryFilter.bind(this,"Big Data")} label="Big Data" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Algorithms")} label="Algorithms" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Graphics")} label="Graphics" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
               <Flexbox flexGrow={1} flexShrink={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Other")} label="Other" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              
                  <Flexbox flexGrow={1} flexShrink={1}>
                  
                    <SelectField className={''} 
                        value={this.state.selectfield_value}
                        onChange={this.handleChange.bind(this)}
                        style={{width:'170px', color:'white'}}
                        labelStyle={{color:'white'}}
                     >
                        <MenuItem value={'Newest'} primaryText="Newest" />
                        <MenuItem value={'Rating'} primaryText="Rating" />
                        <MenuItem value={'Popularity'} primaryText="Popularity" />
                        <MenuItem value={'Price'} primaryText="Price" />
                      </SelectField>
                       <TextField hintText={'Search...'} hintStyle={{color:'white'}} onChange={this.searchFilter.bind(this)} className={'search'} style={{marginLeft:'10px',color:'white',fontWeight:'400',width:'170px'}} inputStyle={{color:'white'}}/>
                   </Flexbox>
             </Flexbox>
                
            </div>
        )
    }
}

export default Tags;