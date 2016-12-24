import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


<meta name="viewport" content="width=device-width" />

var Contact = React.createClass({ 
    render(){
        var style = { 
                      margin: 'auto',
                      width: '60%',
                      textAlign: 'center'
                  };
        return (
                  <div className="container-search" style={{paddingTop:'5%'}}>
                  <Card style={style}>
                    <div id={'contact_div'}>
                        <span>Please Input Your Message :</span>    
                        <TextField hintText={'Message'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/> 
                         <br />    
                        <span style={{paddingLeft:'88px'}}>Your Address :</span>    
                        <TextField hintText={'Address'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/>
                        <br />    
                        <span style={{paddingLeft:'38px'}}>Your Company Name :</span>    
                        <TextField hintText={'Company Name'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/>
                        <br />
                        <br />
                        <Divider /> 
                        <br />
                        <div style={{padding:'0 45%'}}>    
                         <RaisedButton primary={true} label="Contact" href="" />
                        </div>  
                    </div> 
                </Card>                    
                </div>
        )
    }

});

module.exports = Contact;
