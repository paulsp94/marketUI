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
      error: false
    }
  }

  setAction = (type) => {
    return () => {
      this.setState({ [type]: true })
    }
  }

  handleSubmit = (type) => {
    return () => {
      const email = this.refs.email.input.value;
      const pw = this.refs.pw.input.value;
      if (type === 'login') {
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
        }).catch((error) => this.setState({ error: error.message }));
      }
    }
  }

  closeModal = () => {
    this.setState({ login: false, register: false, error: false })
    this.props.toggleAuthModal()
  }

  render () {
    const { error } = this.state
    const { open } = this.props
    const errors = error ? <p className="text-danger"> {error} </p> : '';
    return (
      <Dialog
        onRequestClose={this.closeModal}
        open={open}
      >
        <div className="row">
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
                  className={cx('login-button')}
                />
                <RaisedButton label="Sign Up" onClick={this.handleSubmit('register')} secondary/>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    )
  }
}
