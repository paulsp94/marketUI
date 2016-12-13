import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Tab as MuiTab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var user = require('../../action/action.jsx');
import { fetchuserdetails, changepassword, changeemaildetails } from '../../action/action.jsx'


function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchuserdetails,
        changepassword,
        changeemaildetails,
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

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

    componentWillMount(){
        this.props.fetchuserdetails();
    }

    Dropboxopen4(){
        this.setState({open3: true});
    }

    Dropboxcloase4(){
        this.setState({open3: false});
    }

    Dropboxcloase3(){
        this.setState({open2: false});
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

    changeemail(){
        var newemail = this.newemail.value;
        this.props.changeemaildetails(newemail);
    }

    changepassword(){

        var password1= this.password.value;
        var password2= this.password1.value;

        if(password1 == password2){
            this.props.changepassword(password1);
            this.setState({open: false});
        }
        else{
            console.log('didnt match');
        }
    }

    render(){


        if(this.props.userdetails.password != false){
            var passwordchangedresult = this.props.userdetails.password;
            var result = Object.keys(passwordchangedresult).map(key => passwordchangedresult[key]);
            if(result != "Changed Successfully"){
                result = "Error:"+result[0].message;
            }
        }
        else {
            var result = "";
        }

        if(this.props.userdetails.Email != false){
            var passwordchangedresult1 = this.props.userdetails.Email;
            var Emailresult = Object.keys(passwordchangedresult1).map(key => passwordchangedresult1[key]);
            if(Emailresult != "Changed Successfully"){
                Emailresult = "Error:"+ Emailresult[0].message;
            }
        }
        else {
            var Emailresult = "";
        }

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
            email = user.email;
        } else {
            email = "not logged in"
        }


        return (
            <div className="Profiledata">
            <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                <CardText>
                    <br/><br/>
                     Email: {email}
                    <br/><br/>
                    <RaisedButton label="Change Email" style={{ margin: 12}} onTouchTap={this.Dropboxopen4.bind(this)} />
                    <br />
                    {Emailresult}<br/>
                   <RaisedButton label="Change Password" style={{ margin: 12}} onTouchTap={this.Dropboxopen1.bind(this)} />
                    <br/><br/>
                    {result}

                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.Dropboxcloase1.bind(this)}>

                       <h3> Change Password </h3> <br/><br/>

                        Enter Password: <br/> <input className="inputfield-signup1" type="password" name="password" ref={(fgf) => this.password = fgf} /> <br/><br/>
                        Enter Again-Password: <br/><input className="inputfield-signup1" type="password" name="password1" ref={(fg) => this.password1 = fg}/><br/><br/>
                        <RaisedButton label="Submit" onClick={this.changepassword.bind(this)} style={{ margin: 12}} />

                    </Dialog>

                     <Dialog
                        actions={actions3}
                        modal={false}
                        open={this.state.open3}
                        onRequestClose={this.Dropboxcloase4.bind(this)}>
                         <input className="inputfield-signup1" type="email" placeholder="Enter New Email" name="newemail" ref={(g) => this.newemail = g}/>

                         <RaisedButton label="Submit" onClick={this.changeemail.bind(this)} style={{ margin: 12}} />

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
        )
    }
}

export default Profile;



