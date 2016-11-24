import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Tab as MuiTab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';


class  Profile extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            open:false,
            open1:false,
            open2:false,
            open3:false,
        };

    }


    Dropboxopen4(){
        this.setState({open3: true});
    }

    Dropboxcloase4(){
        this.setState({open3: false});
    }

    Dropboxopen3(){
        this.setState({open2: true});
    }

    Dropboxcloase3(){
        this.setState({open2: false});
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

    userdetails(){

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


        const actions2 = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase3.bind(this)}
            />,
        ];

         const actions3 = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase4.bind(this)}
            />,
        ];

        var user = firebase.auth().currentUser;
        var email;
        if (user != null) {
            email = user.uid;
            console.log('user email is', email);
        } else {
            email = "not logged in"
        }


        return (
            <MuiThemeProvider>
                <div className="Profiledata">
                <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                    <CardText>
                        <br/><br/>
                         Email: {email}
                        <br/><br/>          
                        <RaisedButton label="Change Email" style={{ margin: 12}} onTouchTap={this.Dropboxopen4.bind(this)} />   
                        <br />             
                       <RaisedButton label="Change Password" style={{ margin: 12}} onTouchTap={this.Dropboxopen1.bind(this)} />
                        <br/><br/>
                        

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
                            actions={actions3}
                            modal={false}
                            open={this.state.open3}
                            onRequestClose={this.Dropboxcloase4.bind(this)}>
                             <TextField
                            style={{marginLeft: "25%", width: 400}}
                            hintText="Enter new email"
                            />
                        </Dialog>

                        <Dialog
                            actions={actions1}
                            modal={false}
                            open={this.state.open1}
                            onRequestClose={this.Dropboxcloase2.bind(this)}>
                        </Dialog>

                    </CardText>
                    </Card>
                    <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>

                       <CardText>
                      
                        <br/>
                        <RaisedButton label="Choose Payment" style={{ margin: 12}} onTouchTap={this.Dropboxopen2.bind(this)}/>

                        <RaisedButton label="Payment Overview" style={{ margin: 12}} onTouchTap={this.Dropboxopen3.bind(this)}/>

                        <Dialog
                            actions={actions1}
                            modal={false}
                            open={this.state.open1}
                            onRequestClose={this.Dropboxcloase2.bind(this)}>
                        </Dialog>

                        <Dialog
                            actions={actions2}
                            modal={false}
                            open={this.state.open2}
                            onRequestClose={this.Dropboxcloase3.bind(this)}>
                        </Dialog>

                    </CardText>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Profile;



