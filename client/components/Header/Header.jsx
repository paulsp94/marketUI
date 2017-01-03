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

      if (firebaseUser) {
        // TODO: remove this block of code when going live
        // Placed here only for testing purposes.
        // Makes the logged in user `ADMIN`
        //  let newAdminKey = firebase.database().ref().child('admin').push().key;
        //  let update = {};
        //  update[`/admin/${newAdminKey}`] = {
        //    userId: firebase.auth().currentUser.uid
        //  };
        //  firebase.database().ref().update(update);
        // END OF BLOCK

        // firebase.database().ref('admin').once('value')
        //   .then((snapshot) => {
        //     let data = snapshot.val();
        //     let currentUser = firebase.auth().currentUser;
        //     for(let adminKey of Object.keys(data)) {
        //       let adminData = data[adminKey];
        //       if(currentUser.uid === adminData.userId) {
        //         this.setState({isAdmin: true});
        //       }
        //     }
        //   })
      } else {
        console.log('Not logged in');
      }
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
                              <Link to="/profile" className="">
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
            
            <Link to="/Support" style={{ textDecoration: 'none' }}>
              <MenuItem primaryText="Support"/>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none' }}>
              <MenuItem primaryText="About" />
            </Link>
            <Link to="/Policy" style={{ textDecoration: 'none' }}>      
              <MenuItem primaryText="Policy" />
            </Link>
            <Link to="/Impressum" style={{ textDecoration: 'none' }}>
              <MenuItem primaryText="Impressum"/>
            </Link> 
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
          <Link to="/market" className="">
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
