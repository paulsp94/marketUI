var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
import * as firebase from 'firebase';

var Main = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: (null !== firebase.auth().currentUser)
        }
    },
    componentWillMount: function() {
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
    },
    render: function() {
        var loginOrOut;
        var register;
        var profileNav;
        var creationNav;
        if (this.state.loggedIn) {
            loginOrOut = <li>
                <Link to="/logout" className="">Logout</Link>
            </li>;
            profileNav = <li>
                        <Link to="profile" className="">
                                Profile
                            </Link>
                        </li>;
            creationNav =   <li>
                                <Link to="General" className="">
                                    ProductCreation
                                </Link>
                            </li>;            
            register = null;

        } else {
            loginOrOut = <li>
                <Link to="/login" className="">Login</Link>
            </li>;
            register = <li>
                <Link to="registration" className="">
                    register
                </Link>
            </li>;
            profileNav = null;
            creationNav = null;
        }
        return (
            <span>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="">
                        <div className="navbar-header">
                            <Link to="ProductSearch" className="navbar-brand">
                                Rscript.Market
                            </Link>
                        </div>
                        <ul className="nav navbar-nav pull-right">
                             <li>
                                <Link to="/" className="">
                                    Home
                                </Link>
                            </li>
                             <li>
                                <Link to="ProductSearch" className="">
                                    Search
                                </Link>
                            </li>
                            <li>
                                <Link to="checkout" className="">
                                    checkout
                                </Link>
                            </li>
                            {creationNav}
                            {profileNav}
                            {register}
                            {loginOrOut}
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </span>
        )
    }
});

module.exports = Main;