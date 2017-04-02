import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var Welcome = React.createClass({

    render(){
        return (
            <div className="welcomeBackground">
                <div style={{height: '100vh'}} >
                    <div className="welcome-text">
                        <h1> Welcome to R.Codes</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <br/>
                         <Link to="/Market" className="">
                            <RaisedButton label="Explore" style={{}} />
                        </Link>
                    </div>
                      <div className="welcomeFlex">
                        <div className="welcomeFlexItem">
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.3)'}} className="welcomeCardBoxes">
                            <div className="welcomeCardHeader">   <h3> Tutorials </h3> </div>
                            <div className="welcomeBoxText"><p> We host a variety of tutorials for the most common packages such as ggplot2, shiny and dplyr. All tutorials on the R.Codes are free and allow to share 
                            knowledge across the community. Every R tutorial a user commits will also be added to the R.Codes blog and will be shared with r-bloggers. </p></div>
                          </Card>
                        </div>
                        <div className="welcomeFlexItem">
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.3)'}} className="welcomeCardBoxes" >
                            <div className="welcomeCardHeader">   <h3> Components </h3> </div>
                              <div className="welcomeBoxText"><p> We offer various complete code solutions for otherwise complicated data science implementations. These implementations range from shiny templates to machine learning scripts. One of our mains is to build a micro-environment rich of various R components for other developers. </p></div>
                          </Card>
                        </div>
                        <div className="welcomeFlexItem">
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.3)'}} className="welcomeCardBoxes" >
                            <div className="welcomeCardHeader">   <h3> Implementations </h3> </div>
                              <div className="welcomeBoxText"><p> The authors of those tutorials and components are experts in their fields. If clients want to implement similar solutions, it can be beneficial to hire those R developers for your personal project. We at R.Codes offer a solution to connect you to those authors and to handle financial transitions. </p></div>
                          </Card>
                       </div>
                      </div>
                </div>
            </div>
        )
    }
});

module.exports = Welcome;
