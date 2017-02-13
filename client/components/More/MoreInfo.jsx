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
