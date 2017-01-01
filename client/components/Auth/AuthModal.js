import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './AuthModal.scss'
import classNames from 'classnames/bind'
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import {Link} from "react-router";

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
            <div className="col-sm-6 col-sm-offset-3">
              <form>
                <div className="form-group">
                  <TextField
                    ref="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    floatingLabelFixed
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    ref="pw"
                    hintText="Password"
                    floatingLabelText="Password"
                    floatingLabelFixed
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

                
                  
                <div className="text-center">
                  No account yet?
                </div>
                <div className={cx('buttons-container')}>
                  <RaisedButton
                    label="Sign Up"
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
            <div className="col-sm-6 col-sm-offset-3">
              <form>
                <div className="form-group">
                  <TextField
                    ref="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    floatingLabelFixed
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    ref="pw"
                    hintText="Password"
                    floatingLabelText="Password"
                    floatingLabelFixed
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
