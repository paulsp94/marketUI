import { Link } from 'react-router'
import * as firebase from 'firebase';
import AuthModal from 'components/Auth/AuthModal';
import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


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
  }

  logout = () => {
    firebase.auth().signOut()
    this.context.router.push('/')
  }

  render () {
    let {loggedIn, isAdmin} = this.state;

    const contentLoggedIn = loggedIn ? 
                            <li>
                              <Link to="/Profile" className="">
                                Profile
                              </Link>
                            </li> :  
                            <li>
                               <a className="cursor-pointer" onClick={this.toggleAuthModal}>Login / Sign Up</a>
                           </li>;

    const content = 
      <ul className="nav navbar-nav navbar pull-right">

        <li>
            <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
      targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
      style={{marginRight: 27}}
    >
            
            <MenuItem primaryText="Support" containerElement={<Link to='/Support' />}/>
            <MenuItem primaryText="About" containerElement={<Link to='/About' />}/>
            <MenuItem primaryText="Policy" containerElement={<Link to='/Policy' />}/>
            <MenuItem primaryText="Impressum" containerElement={<Link to='/Impressum' />}/>
            <MenuItem primaryText="Sign out" onClick={this.logout}/>
            </IconMenu>
       </li>
         {contentLoggedIn} 
         <li>
          <Link to="/Create" className="">
            Create
          </Link>
        </li>
        <li>
          <Link to="/Market" className="">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
      </ul>
      
    return (
      <div>
        <AuthModal open={this.state.openAuthModal} toggleAuthModal={this.toggleAuthModal}/>
        <nav className="navbar navbar-default navbar-static-top navColor">
          <div className="">
              <Link to="/" className="navbar-brand" style={{color:'#37474F'}}>
                <h3> R.Codes </h3>
                <h3 style={{color:"#B71C1C"}}> [BETA] </h3>
              </Link>
            {content}
          </div>
        </nav>
      </div>
    )
  }
};
