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
                      marginBottom: '2px',
                      paddingTop: '7px',
                      paddingBottom: '1px',
                      width: '60%',
                      paddingLeft: '10px',
                      paddingRight: '10px'
                  };
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> Beta Test Awards </h2>
                   </Card> 
                   <Card style={{
                      margin: 'auto',
                      marginBottom: '2px',
                      width: '60%',
                      }}>
                   <iframe src="https://player.vimeo.com/video/197839131?title=0&byline=0" width="100%" height="425" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                   </Card>
                  <Card style={style}>
                <p> To award the active participation in the R.Codes Beta, we will give away 150$ for the 3 best items   created until the end of the Beta. These are the rules and guidelines: </p>
                <ul>
                <li> 3 winners will be selected - each one will be awared with 50$</li>
                <li> The winners are determined by rating/amount downloads/facebook votings & comments </li> 
                <li> The price will be paid out in either bitcoin or via paypal in $ </li>
                <li> Winning items may not be subject to of copy right/license infringement </li>
                <li> The winners are announced on the rscript.market front page at the 9th of january, we will then contact the account email to collect contact information and provide information about the payment </li> 
                </ul>
                <br/>
                <p> All actions must be in compliance with our <Link to="/Policy"> terms & policy </Link>  </p> 
                <p> For remaining questions please send a mail to support@r.codes </p>
                </Card>       
                           
              </div>
        )
    }

});

module.exports = Contact;
