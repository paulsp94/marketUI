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

        return (
            <MuiThemeProvider>
                <div className="Profiledata">
                <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                    <CardText>
                        <br/><br/>
                         Email: komaldeep1993@gmail.com
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



