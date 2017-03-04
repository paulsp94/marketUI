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
            <div>
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
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.2)'}} className="welcomeCardBoxes">
                            <div className="welcomeCardHeader">   <h3> Tutorials </h3> </div>
                            <div className="welcomeBoxText"><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
                          </Card>
                        </div>
                        <div className="welcomeFlexItem">
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.2)'}} className="welcomeCardBoxes" >
                            <div className="welcomeCardHeader">   <h3> Templates </h3> </div>
                              <div className="welcomeBoxText"><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                          </Card>
                        </div>
                        <div className="welcomeFlexItem">
                          <Card style={{backgroundColor: 'rgba(0,0,0,0.2)'}} className="welcomeCardBoxes" >
                            <div className="welcomeCardHeader">   <h3> Implementations </h3> </div>
                              <div className="welcomeBoxText"><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
                          </Card>
                       </div>

                      </div>
                </div>
            </div>
        )
    }

});

module.exports = Welcome;
