import * as firebase from 'firebase';
import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';

var registration = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      error: false
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.value;
    var pw = this.refs.pw.value;

    // Add signup event
    // TODO: Fazer validação de formulário
    firebase.auth().createUserWithEmailAndPassword( email, pw )
    .then( this.context.router.replace('/') )
    .catch( this.setState({error: e.message}) );
  },
  render: function(){
    var errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
          <MuiThemeProvider>
                <div className="background">
                    <div className="container-search">
                     <Header/>
                       <div className="col-sm-6 col-sm-offset-3">
                        <h1> Register </h1>
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label> Email </label>
                            <input className="form-control" ref="email" placeholder="Email"/>
                          </div>
                          <div className="form-group">
                            <label>Password</label>
                            <input ref="pw" type="password" className="form-control" placeholder="Password" />
                          </div>
                          {errors}
                          <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                      </div>
                    </div>
                </div>
            </MuiThemeProvider>

      
    )
  }
});

module.exports = registration;