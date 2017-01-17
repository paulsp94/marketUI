import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './AuthModal.scss'
import classNames from 'classnames/bind'
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import {Link} from "react-router";
import FontIcon from 'material-ui/FontIcon';
import Flexbox from 'flexbox-react';


const cx = classNames.bind(styles)

export default class AuthModal extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    toggleAuthModal: React.PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      error: false,
      signUp: false
    }
  }

  setAction = (type) => {
    return () => {
      this.setState({ [type]: true })
    }
  }

  pwReset = (type) =>{
    return () => {
      const email = this.refs.email.input.value;
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        console.log('email send out')
      }, function(error) {
        // An error happened.
      });
    }
  }

   gitLogin = (type) =>{
    return () => {
      var provider = new firebase.auth.GithubAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    }).then(() => {
          this.closeModal();
    });
    }
  }

    facebookLogin = (type) =>{
    return () => {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      }).then(() => {
          this.closeModal();
      });
    }
  }

    googleLogin = (type) =>{
    return () => {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      }).then(() => {
          this.closeModal();
        });
    }
  }

  handleSubmit = (type) => {
    return () => {
      const email = this.refs.email.input.value;
      const pw = this.refs.pw.input.value;
      if (type === 'login') {
        firebase.auth().signInWithEmailAndPassword(email, pw).then(() => {
          this.closeModal();
        }).catch((error) => {
          this.setState({ error: error.message });
        });
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, pw).then(() => {
          this.closeModal();
        }).catch((error) => this.setState({ error: error.message }));
      }
    }
  }

  closeModal = () => {
    this.setState({ signUp: false, error: false });
    this.props.toggleAuthModal();
  }

  toggleSignUpMenu = () => {
    this.setState({signUp: !this.state.signUp})
  }

  render () {
    const { error, signUp } = this.state
    const { open } = this.props
    const errors = error ? <div> <p className="text-danger"> {error} </p> 
                <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="reset password"
                    onClick={this.pwReset('password')}
                    primary
                    fullWidth
                  />
                  </div>
    </div> : '';
    return (
      <Dialog
        onRequestClose={this.closeModal}
        open={open}
        className={cx('auth-container')}
      >
        {!signUp ? <div>
          <div className="rowAuth">
            <div className="loginContainer">

              <Flexbox flexDirection="row" style={{textAlign:'center'}}>

                 <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="GitHub"
                    primary
                    onClick={this.gitLogin('gitLogin')}
                    style={{margin: 8, marginBottom: 0, padding: 0}}
                  />
                </div>

                <div className={cx('buttons-container')}>
                  <RaisedButton
                    secondary
                    label="Facebook"
                    onClick={this.facebookLogin('facebook')}
                    style={{margin: 8, marginBottom: 0, padding: 0}}
                  />
                </div>
               
                 <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="Google"
                    primary
                    onClick={this.googleLogin('google')}                    
                    style={{margin: 8, marginBottom: 0, padding: 0}}
                  />
                </div>

              </Flexbox>

              <form>
                <div className="form-group">
                  <TextField
                    ref="email"
                    floatingLabelFixed={true}
                    floatingLabelText="Email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    ref="pw"
                    floatingLabelText="Password"
                    floatingLabelFixed={true}
                    type="password"
                    fullWidth
                  />
                </div>
                {errors}
                <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="Login"
                    onClick={this.handleSubmit('login')}
                    primary
                    fullWidth
                  />
                  </div>
                
                <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="Create Account"
                    onClick={this.toggleSignUpMenu}
                    secondary
                    fullWidth
                  />
                </div>
              </form>
            </div>
          </div>
        </div> : <div>
          <div className="rowAuth">
            <div className="loginContainer">
              <form>
                <div className="form-group">
                  <TextField
                    ref="email"
                    floatingLabelText="Email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    ref="pw"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth
                  />
                </div>
                <div >
                  by signing up you agree to our <Link to="/Policy"> terms </Link>
                </div>
                {errors}
                <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="Sign Up"
                    onClick={this.handleSubmit('signUp')}
                    secondary
                    fullWidth
                  />
                </div>

                  Already got an account?&nbsp;
                  <a onClick={this.toggleSignUpMenu} className="cursor-pointer">Sign in here</a>
              </form>
            </div>
          </div>
        </div>}
      </Dialog>
    )
  }
}
