import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
var firebase = require('firebase');
<meta name="viewport" content="width=device-width" />

var ContentInfo = React.createClass({
    render(){

        var user = firebase.auth().currentUser;

        var ContentButton = user ? <Link to="/ContentCreation">
                                        <RaisedButton label="Create Content" primary={true} style={{marginTop: 10, marginBottom: 20}} />
                                </Link> : <RaisedButton label="Log IN first" primary={true} disabled={true} style={{marginTop: 10, marginBottom: 20}} />;

        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> Create Content </h2>
                </Card>
                <Card className="pageStyle">
                    <p style={{textAlign:'center'}}> Creating Content on R.Codes is easy. Just create your account and follow this short tutorial. </p>
                </Card>
                <Card className="pageStyle">
                   <div className="fadeIn">
                   <iframe src="https://player.vimeo.com/video/198436016?title=0&byline=0" width="100%" height="425" allowFullScreen></iframe>
                   </div>
                </Card>
                <Card className="pageStyle" style={{textAlign:'center'}}>
                    <p > All actions must be in compliance with our <Link to="/Policy"> terms & policy </Link> </p>
                    {ContentButton}
                    <p > <b> This is a BETA - make sure to save everything offline! </b>  </p>
                </Card>
              </div>
        )
    }

});

module.exports = ContentInfo;
