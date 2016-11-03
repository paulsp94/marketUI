import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import ProductContent from '../ProductContent/ProductContent.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Tab as MuiTab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
class  Profile extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            open: false,
            open1: false,
        };

    }

    Dropboxopen2(){
        this.setState({open1: true});
    }

    Dropboxcloase2(){
        this.setState({open1: false});
    }

    Dropboxopen1(){
        this.setState({open: true});
    }

    Dropboxcloase1(){
        this.setState({open: false});
    }


    render(){

        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase1.bind(this)}
            />,
        ];

        const actions1 = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase2.bind(this)}
            />,
        ];

        return (
            <MuiThemeProvider>
                <div className="Profiledata">
                    <CardText>
                        <br/><br/>
                       Name - Komaldeep Singh
                        <br/><br/>
                         Email- komaldeep1993@gmail.com
                        <br/><br/>
                         Address - bla bla
                        <br/><br/>
                         Last Name - Chahal
                        <br/><br/>
                       <RaisedButton label="Change Password" style={{ margin: 12}} onTouchTap={this.Dropboxopen1.bind(this)} />
                        <br/><br/>
                        <RaisedButton label="Choose Payment" style={{ margin: 12}} onTouchTap={this.Dropboxopen2.bind(this)}/>

                        <Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.Dropboxcloase1.bind(this)}>

                           <h3> Change Password </h3> <br/><br/>

                            Enter Password: <br/> <input className="inputfield-signup1" type="password"/> <br/><br/>
                            Enter Again-Password: <br/><input className="inputfield-signup1" type="password"/><br/><br/>

                            <RaisedButton label="Submit" style={{ margin: 12}} />

                        </Dialog>

                        <Dialog
                            actions={actions1}
                            modal={false}
                            open={this.state.open1}
                            onRequestClose={this.Dropboxcloase2.bind(this)}>


                        </Dialog>

                    </CardText>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default Profile;



