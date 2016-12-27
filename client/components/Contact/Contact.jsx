import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider/Divider';
import Flexbox from 'flexbox-react';
import {Input, TextArea, GenericInput} from 'react-text-input';



var Contact = React.createClass({

    render(){
        return (
                <div className="">
       
                   <Flexbox flexDirection="column" style={{width: '600px', margin:'auto'}}>
                   <Flexbox flexGrow={1}>
                    <div  className={'container-contact-up'}>
                        <div>
                          <p> If (you have questions || suggestions || found a bug) {'{'}<br/>
                          &nbsp;  &nbsp;  &nbsp;  &nbsp;  answer(name,message, t = 2) <br/>
                           {'}'}
                          </p>
                        </div>
                    </div>
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                    <div className={'container-contact-down'}>
                        <form method="POST" action="http://formspree.io/contact@rscript.market">
                        <TextField type="email" name="email" hintText={'Email'} className={'contact_text'}/>
                         <br />    
                         <br />    
                         <textarea name="message" className="message-textarea" placeholder="Your message"></textarea>    
                        <br />
                        <br />
                        <RaisedButton type="submit" primary={true} label="Contact"  onClick=""/>

                        </form>
                    </div>
                    </Flexbox>
                    
                    </Flexbox>
                </div>
        )
    }
});

module.exports = Contact;
