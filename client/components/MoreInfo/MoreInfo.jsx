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
                      paddingLeft: '2px',
                  };
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card style={style}>
                   <h2 style={{textAlign:'center'}}> Beta Test Awards </h2>
                   </Card> 
                  <Card style={style}>
                <p> to award the active participation in the R.Codes Beta, we will give away 150$ for the 3 best items   created until the end of the Beta. These are the rules and guidelines: </p>
                <ul>
                <li> 3 winners will be selected - each one will be awared with 50$</li>
                <li> The winners are determined by rating/amount downloads/facebook votings/comments </li> 
                <li> Winning items may not be subject to of copy right/license infringement </li>
                <li> The price will be paid out in either bitcoin or via paypal in $ </li>
                <li> The winners are announced on the rscript.market front page at the 9th of january, we will then contact the account email to collect contact information and provide information about the payment </li> 
                </ul>
                <br/>
                <p> all actions must be in compliance with our <Link to="/Policy"> terms & policy </Link>  </p> 
                <p> for any open question please send a mail to contact@rscript.market </p>
                </Card>                   
              </div>
        )
    }

});

module.exports = Contact;
