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

var About = React.createClass({ 
    render(){
        var style = { 
                      margin: 'auto',
                      width: '60%',
                      paddingLeft: '2px',
                  };
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card style={style}>
                   <h2 style={{textAlign:'center'}}> About </h2>
                   </Card> 
                  <Card style={style}>
                  This section is added the next days. 
                </Card>                   
              </div>
        )
    }

});

module.exports = About;
