import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


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
                    <div className="fadeIn">
                      <iframe src="https://player.vimeo.com/video/197839131?title=0&byline=0" width="100%" height="425" allowFullScreen></iframe>
                    </div>
                   </Card>
                  <Card style={style}>
                    <p> To award the active participation in the R.Codes Beta, we will give away 150$ for the 3 best items   created until the end of the Beta. These are the rules and guidelines: </p>
                    <ul>
                      <li> 3 winners will be selected - each one will be awared with 50$</li>
                      <li> The winners are determined by rating/amount downloads/facebook votings & comments </li>
                      <li> The price will be paid out in either bitcoin or via paypal in $ </li>
                      <li> Winning items may not be subject to of copy right/license infringement </li>
                      <li> Items must be independently created (without any offerings) </li>
                      <li> The winners are announced on the R.Codes front page at the 30th of january, we will then contact the account email to collect contact information and provide information about the payment </li>
                    </ul>
                    <br/>
                    <p> All actions must be in compliance with our <Link to="/Policy"> terms & policy </Link>  </p>
                  </Card>
                  <Card style={style}>
                    <div style={{textAlign:'center', marginBottom: 10, marginTop: 4}}>
                    <Link to="/Create"> <RaisedButton label="continue" primary={true}  /> </Link>
                    </div>
                  </Card>
              </div>
        )
    }
});

module.exports = Contact;
