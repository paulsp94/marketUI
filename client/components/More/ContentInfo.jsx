import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';

<meta name="viewport" content="width=device-width" />

var ContentInfo = React.createClass({ 
    render(){
        var style = { 
                      margin: 'auto',
                      marginBottom: '2px',
                      paddingTop: '13px',
                      paddingBottom: '1px',
                      width: '60%',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      textAlign: 'center'
                  };
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> Create Content </h2>
                   </Card>
                   <Card style={style}>
                    <p> Creating Content on R.Codes is easy. Just create your account and follow this short tutorial. </p>
                 </Card>   
                   <Card style={{
                      margin: 'auto',
                      marginBottom: '2px',
                      width: '60%',
                      }}>
                   <iframe src="https://player.vimeo.com/video/197839131?title=0&byline=0" width="100%" height="425" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                   </Card>
                  <Card style={style}>
                    <p> All actions must be in compliance with our <Link to="/Policy"> terms & policy </Link> </p>
                    <p> If you have open questions please <Link to="/Support"> let us know </Link> </p>
                    <Link to="/ContentCreation">
                    <RaisedButton label="Create Content" primary={true} style={{marginTop: 10, marginBottom: 20}} />
                    </Link>
                    <p> <b> This is a BETA - make sure to save everything offline! </b>  </p>  
                 </Card>       
                           
              </div>
        )
    }

});

module.exports = ContentInfo;
