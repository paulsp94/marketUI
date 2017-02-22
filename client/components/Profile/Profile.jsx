import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchuserdetails, changepassword, changeemaildetails } from '../../action/action.jsx'
import { browserHistory } from 'react-router'
var user = require('../../action/action.jsx');
import {Link} from "react-router";

// Firebase
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
// Material-UI
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// External
import MaterialTagsInput from '../_common/MaterialTagsInput';

function mapStateToProps(store) {
  return {
    userdetails: store.userdetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchuserdetails,
    changepassword,
    changeemaildetails,
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open1: false,
      open2: false,
      open3: false,
      tags: [],
      description: '',
      newEmail: '',
      newPassword: '',
      newPasswordConfirmation: '',
    };
  }

  componentWillMount(){
    // this.props.fetchuserdetails();
  }

  componentDidMount(){


      try {
          var user = firebase.auth().currentUser;
          var Userid = user.uid;
      } catch (e) {
          browserHistory.push('Market');
      }


      firebase.database()
          .ref('ProductOwnerDetails/'+Userid)
          .once("value", (snapshot) => {

              if(snapshot.exists()) {
                  if(snapshot.hasChild('Description'))
                    var Description = snapshot.val().Description;
                    this.setState({
                        description: Description,
                    })
                }

                  if(snapshot.hasChild('tags')) {
                    var tags = snapshot.val().tags;
                    this.setState({
                        tags: tags,
                    })
              }

              else {
                  console.log('value doesnt exist');
              }

          }).catch(function (error) {
          console.log(error);
      })
  }


  Dropboxopen4(){
    this.setState({open3: true});
  }

  DropboxClose4(){
    this.setState({open3: false});
  }

  DropboxClose3(){
    this.setState({open2: false});
  }

  DropboxClose2(){
    this.setState({open1: false});
  }

  Dropboxopen1(){
    this.setState({open: true});
  }

  DropboxClose1(){
    this.setState({open: false});
  }

  userdetails(){

  }

  onEmailChange = (event, value) => {
    this.setState({
      newEmail: value
    })
  };

  onNewPasswordChange = (event, value) => {
    this.setState({
      newPassword: value
    })
  };

  onNewPasswordConfirmationChange = (event, value) => {
    this.setState({
      newPasswordConfirmation: value
    })
  };

  submitEmailChange = () => {
    const { newEmail } = this.state;
    this.props.changeemaildetails(newEmail);
  };

  submitChangePassword = () => {
    const { newPassword, newPasswordConfirmation } = this.state;
    if (newPassword && (newPassword === newPasswordConfirmation)) {
      this.props.changepassword(newPassword);
      this.setState({open: false});
    } else {
      alert("Passwords don't match!");
    }
  };

  deleteAccount(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      console.log("userDeleted");
      browserHistory.push('/');
      // User deleted.
    }, function(error) {
      // An error happened.
    });

  }

  onTagsChange = (tags) => {
    this.setState({ tags })
  };

  onDescriptionChange = (event, value) => {
    this.setState({
      description: value
    })
  };

  SubmitUserDetails(){
    var description = this.state.description != '' ? this.state.description : '-';
    var tags = this.state.tags != '' ? this.state.tags : [''];
    var user = firebase.auth().currentUser;
    var Userid = user.uid;
    var email = user.email;

    firebase.database().ref('ProductOwnerDetails/' + Userid).set({
      Description: description,
      tags: tags,
      email: email,
    });
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

    const changePasswordDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.DropboxClose1.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.submitChangePassword}
      />
    ];

    const actions1 = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.DropboxClose2.bind(this)}
      />,
    ];

    const actions2 = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.DropboxClose3.bind(this)}
      />
    ];

    const changeEmailDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.DropboxClose4.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.submitEmailChange}
      />
    ];

    var user = firebase.auth().currentUser;
    var email;
    if (user != null) {
      email = user.email;
    } else {
      email = "not logged in"
    }

    return (
      <div className="Profiledata" id="profile-page">
        <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
          <CardText>
            <br/><br/>
            Email: {email}
            <br/><br/>
            <RaisedButton label="Change Email" style={{margin: 12}} onTouchTap={this.Dropboxopen4.bind(this)} />
            <RaisedButton label="Change Password" style={{margin: 12}} onTouchTap={this.Dropboxopen1.bind(this)} />
            <RaisedButton label="Delete Account" style={{margin: 12}} onTouchTap={this.deleteAccount.bind(this)} />
            <br/>
            {Emailresult}
            {result}

            {/* change password dialog */}
            <Dialog
              actions={changePasswordDialogActions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.DropboxClose1.bind(this)}>

              <h3> Change Password </h3> <br/><br/>

              <TextField
                type="password"
                floatingLabelText="New Password"
                floatingLabelStyle={{fontWeight: 'normal'}}
                fullWidth
                onChange={this.onNewPasswordChange}
              />

              <TextField
                type="password"
                floatingLabelText="Password Confirmation"
                floatingLabelStyle={{fontWeight: 'normal'}}
                fullWidth
                onChange={this.onNewPasswordConfirmationChange}
              />
            </Dialog>

            {/* change email dialog */}
            <Dialog
              actions={changeEmailDialogActions}
              modal={false}
              open={this.state.open3}
              onRequestClose={this.DropboxClose4.bind(this)}>

              <TextField
                type="email"
                floatingLabelText="New Email"
                floatingLabelStyle={{fontWeight: 'normal'}}
                fullWidth
                onChange={this.onEmailChange}
              />
            </Dialog>

            <Dialog
              actions={actions1}
              modal={false}
              open={this.state.open1}
              onRequestClose={this.DropboxClose2.bind(this)}>
            </Dialog>

          </CardText>
        </Card>
        <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
          <CardText>
            <Dialog
              actions={actions1}
              modal={false}
              open={this.state.open1}
              onRequestClose={this.DropboxClose2.bind(this)}>
            </Dialog>

            <Dialog
              actions={actions2}
              modal={false}
              open={this.state.open2}
              onRequestClose={this.DropboxClose3.bind(this)}>
            </Dialog>

            <div className="knowledgetags">
              <MaterialTagsInput
                value = {this.state.tags}
                onChange = {this.onTagsChange.bind(this)}
                label = "Your Expertise"
              />

              {/* description */}
              <TextField
                floatingLabelText="Describe yourself"
                floatingLabelStyle={{fontWeight: 'normal'}}
                value={this.state.description}
                fullWidth
                multiLine
                rows={1}
                rowsMax={5}
                onChange={this.onDescriptionChange}
              />

              <br/>
              <br/>
            </div>

            <RaisedButton onClick={this.SubmitUserDetails.bind(this)} label="Save Changes"  secondary={true} style={{ margin: 12}} />
          </CardText>
        </Card>
        <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
          <p> montarize your content and other services
          <Link to="/Connect" className="">
          <RaisedButton label="Apply" secondary={true} style={{ margin: 12}} />
          </Link>
          </p>
        </Card>
      </div>
    )
  }
}

export default Profile;
