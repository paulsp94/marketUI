import React, { Component } from 'react';
import { Link } from 'react-router'
import * as firebase from 'firebase';
import AuthModal from 'components/Auth/AuthModal';
// material-ui
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import './Header.css';

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      isAdmin: false,
      loggedIn: (null !== firebase.auth().currentUser),
      openAuthModal: false
    }
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      this.setState({
        loggedIn: (null !== firebaseUser)
      });
    });
  }

  toggleAuthModal = () => {
    this.setState({ openAuthModal: !this.state.openAuthModal })
  };

  logout = () => {
    firebase.auth().signOut();
    this.context.router.push('/')
  };

  render () {
    const { loggedIn, openAuthModal } = this.state;

    const navbarTitle = (
      <div className="navbar-title">R.CODES <span>BETA</span></div>
    );

    const buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white',
      transform: 'translate(0px, -5px)'
    };

    const appBarMenu = (
      <div>
        { loggedIn
          ? <Link to="/Profile"><FlatButton label="Profile" style={buttonStyle} /></Link>
          : <FlatButton label="Login / Sign Up" style={buttonStyle} onClick={this.toggleAuthModal} />
        }
        <Link to="/Create"><FlatButton label="Create" style={buttonStyle} /></Link>
        <Link to="/Market"><FlatButton label="Explore" style={buttonStyle} /></Link>
        <Link to="/"><FlatButton label="Home" style={buttonStyle} /></Link>

        <IconMenu
          iconButtonElement={<IconButton iconStyle={{color: 'white'}}><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Support" containerElement={<Link to='/Support' />}/>
          <MenuItem primaryText="About" containerElement={<Link to='/About' />}/>
          <MenuItem primaryText="Policy" containerElement={<Link to='/Policy' />}/>
          <MenuItem primaryText="Impressum" containerElement={<Link to='/Impressum' />}/>
          <Divider />
          <MenuItem primaryText="Sign out" onClick={this.logout}/>
        </IconMenu>
      </div>
    );

    return (
      <div>
        <AppBar
          title={navbarTitle}
          onTitleTouchTap={(e) => this.context.router.push('/')}
          iconElementRight={appBarMenu}
          style={{backgroundColor: '#31708f'}}
        />
        <AuthModal open={openAuthModal} toggleAuthModal={this.toggleAuthModal} />
      </div>
    )
  }
};
