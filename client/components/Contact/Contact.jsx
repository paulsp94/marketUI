import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider/Divider';
import Flexbox from 'flexbox-react';

<meta name="viewport" content="width=device-width" />

var Contact = React.createClass({ 
    render(){
        return (
                <div >
                   <Flexbox flexDirection="column" style={{width: '600px', margin:'auto'}}>
                    <Flexbox flexGrow={1}>
                    <div className={'container-contact-up'}>
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
                        <br/>
                    </div>
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                    <div  className={'container-contact-down'}>
                        <div>
                          <span>Company Name : Vaionex Corporation</span><br />
                          <span>Company Address :  Dover, Delaware  </span><br />
                          <span>Company Phone Number : </span><br />
                          <span>Company Email Address : contact@rscript.market</span><br />
                        </div>
                    </div>
                    </Flexbox>
                    </Flexbox>
                </div>
        )
    }
});

module.exports = Contact;
