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
                      marginTop: 20,
                      width: '60%',
                      padding: '20px',
                  };
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card style={style}>
                   <h2 style={{textAlign:'center'}}> About </h2>
                   </Card> 
                  <Card style={style}>

                  <p> We are a team of developers who wanted to change the landscape of R. By creating and sharing content we hope to enrich the R ecosystem in upcoming years. <br/> <br/> After participating in the Google Summer of Code (as student and mentor) and working for various companies as freelancers, we noticed a missing part in the R universe: A platform that enables ambitious programmers to share their experte knowledge, and to allow other developers to create applications/scripts with yet unseen quality. <br/> <br/> The key to the success of R is its open source envronment. We have thousends of free CRAN packages for almost every imaginable application. Still only a few players in the field profit from it: We see consulting companies earning thousends of dollars for relativly simple apps and software companies earning money with their "pro" server solutions. Our idea is to allow R to have more democratic and monetarily distributed culture, in a competitive environment where i.e. bootstrap template shiny applications are just a beginning, not the final product. <br/> <br/> Greetings, <br/> Robin Kohze, Rscript.Market </p>
                </Card>                   
              </div>
        )
    }

});

module.exports = About;
