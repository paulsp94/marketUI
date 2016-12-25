import React from 'react';
import { Link } from 'react-router'
import * as firebase from 'firebase';
import AuthModal from 'components/Auth/AuthModal';

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
      })

      if (firebaseUser) {
        console.log("Logged IN", firebaseUser);
      } else {
        console.log('Not logged in');
      }
    });
  }

  componentDidMount() {
    firebase.database().ref('admin').once('value')
      .then((snapshot) => {
        let data = snapshot.val();
        let currentUser = firebase.auth().currentUser;
        for(let adminKey of Object.keys(data)) {
          let adminData = data[adminKey];
          if(currentUser.uid === adminData.userId) {
            this.setState({isAdmin: true});
          }
        }
      })
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

    const content = loggedIn ?
      <ul className="nav navbar-nav navbar pull-right">
        {
            isAdmin ?
            <li>
              <Link to="/admin" className="">
                Admin
              </Link>
            </li> : null
        }
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ProductSearch" className="">
            Search
          </Link>
        </li>
        <li>
          <Link to="/General" className="">
            ProductCreation
          </Link>
        </li>
        <li>
          <Link to="/profile" className="">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="">
            Contact
          </Link>
        </li>
        <li>
          <a className="cursor-pointer" onClick={this.logout}>Logout</a>
        </li>
      </ul>
      : <ul className="nav navbar-nav navbar pull-right">
      <li>
        <Link to="/" className="">
          Home
        </Link>
      </li>
      <li>
        <Link to="/ProductSearch" className="">
          Search
        </Link>
      </li>
       <li>
          <Link to="/Contact" className="">
            Contact
          </Link>
        </li>
      <li>
        <a className="cursor-pointer" onClick={this.toggleAuthModal}>Login / Sign Up</a>
      </li>
    </ul>
    return (
      <div>
        <AuthModal open={this.state.openAuthModal} toggleAuthModal={this.toggleAuthModal}/>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="">
            <div className="navbar-header">
              <Link to="ProductSearch" className="navbar-brand">
                Rscript.Market
              </Link>
            </div>
            {content}
          </div>
        </nav>
      </div>
    )
  }
};
