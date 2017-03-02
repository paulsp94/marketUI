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
                <div >
                    <div className="welcome-text">
                        <h1> Welcome to R.Codes</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <br/>
                         <Link to="/Market" className="">
                            <RaisedButton label="Explore" style={{}} />
                        </Link>
                    </div>

                    
                    <Card style={{width: '300px', height: '300px'}}>
                      <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                      />
                      <CardMedia

                      >
                        <img src="images/nature-600-337.jpg" />
                      </CardMedia>
                    </Card>
                </div>
            </div>
        )
    }

});

module.exports = Welcome;
