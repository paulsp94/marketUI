import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './AuthModal.scss'
import classNames from 'classnames/bind'
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';

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
      login: false,
      register: false,
      error: false
    }
  }

  setAction = (type) => {
    return () => {
      this.setState({ [type]: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.refs.email.input.value;
    const pw = this.refs.pw.input.value;
    if (this.state.login) {
      firebase.auth().signInWithEmailAndPassword(email, pw).then(() => {
        this.setState({ login: false })
        this.props.toggleAuthModal();
      }).catch((error) => {
        this.setState({ error: error.message });
      });
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, pw).then(() => {
        this.setState({ register: false })
        this.props.toggleAuthModal()
      }).catch((error) => this.setState({ error: e.message }));
    }
  }

  closeModal = () => {
    this.setState({ login: false, register: false, error: false })
    this.props.toggleAuthModal()
  }

  render () {
    const { login, register, error } = this.state
    const { open } = this.props
    const errors = error ? <p className="text-danger"> {error} </p> : '';
    return (
      <Dialog
        onRequestClose={this.closeModal}
        open={open}
      >
        {!login && !register
          ? <div className={cx('buttons-container')}>
          <RaisedButton label="Login" primary onClick={this.setAction('login')}/>
          <RaisedButton label="Sign Up" secondary onClick={this.setAction('register')}/>
        </div>
          : <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <TextField
                  ref="email"
                  hintText="Email"
                  floatingLabelText="Email"
                  floatingLabelFixed
                />
              </div>
              <div className="form-group">
                <TextField
                  ref="pw"
                  hintText="Password"
                  floatingLabelText="Password"
                  floatingLabelFixed
                  type="password"
                />
              </div>
              {errors}
              <RaisedButton label={login ? 'Login' : 'Sign Up'} type="submit" primary/>
            </form>
          </div>
        </div>
        }
      </Dialog>
    )
  }
}
