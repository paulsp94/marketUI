import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider/Divider';

<meta name="viewport" content="width=device-width" />

var Contact = React.createClass({ 
    render(){
        return (
               
                    <div className={'container-contact'}>
                      <div style={{}}>
                        <span> Your Email :</span>    
                        <TextField hintText={'Email'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/> 
                         <br />    
                        <span >Your Name :</span>    
                        <TextField hintText={'Name'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/>
                        <br />    
                        <span>&nbsp;&nbsp;&nbsp;Message :</span>    
                        <TextField hintText={'Message'} /*floatingLabelText={'Message'}*/ className={'contact_text'}/>
                        <br />
                        <br />
                        <div>    
                         <RaisedButton primary={true} label="Contact" href="" />
                        </div>
                        <br />
                      </div>
                        
                        <Divider /> 
                        <br />
                        <div style={{lineHeight:'30px',border:'1px solid lightgrey'}}>
                          <span>Company Name : Rscript.Market</span><br />
                          <span>Company Address :     </span><br />
                          <span>Company Phone Number : </span><br />
                          <span>Company Email Address :</span><br />
                        </div>
                    </div>

        )
    }

});

module.exports = Contact;
