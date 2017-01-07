import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Input, TextArea, GenericInput} from 'react-text-input';
import {Card} from 'material-ui/Card';



var Contact = React.createClass({

    render(){
        return (
                    <div className="container-search" style={{paddingTop:'1px'}}>
                      <Card className="pageStyle">
                         <h2 style={{textAlign:'center'}}> Support </h2>
                      </Card> 
                     <Card className="pageStyle" style={{textAlign: 'center'}}>
                          <form method="POST" action="http://formspree.io/contact@rscript.market">
                            <TextField type="email" name="email" hintText={'Email'} className={'contact_text'}/>
                             <br />    
                             <br />    
                             <textarea name="message" className="message-textarea" placeholder="Your message"></textarea>    
                             <br />
                             <br />
                          <RaisedButton type="submit" primary={true} label="Contact"/>
                          </form>
                      </Card>
                      <Card className="pageStyle" style={{marginBottom: 20}}>
                         <p> If you have any questions, suggestions or found a bug, just leave us a message behind. We and we will get in touch with you. You can also write a mail to contact@r.codes . </p>
                      </Card> 
                    </div>
        )
    }
});

module.exports = Contact;
