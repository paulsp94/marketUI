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

var Impressum = React.createClass({ 
    render(){
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                     <h2 style={{textAlign:'center'}}> Impressum </h2>
                   </Card> 
              <Card className="pageStyle">
                <p> Company: Vaionex Corporation </p>
                <p> Email: contact@rscript.market </p>
                <p> Adress: 122 Stuart Dr, 19901-5825 Dover </p>
                <p> State: Delaware, USA </p>
                <p> CEO: Robin Kohze </p>
              </Card>                   
              </div>
        )
    }

});

module.exports = Impressum;
