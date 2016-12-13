import * as firebase from 'firebase';
import React, { Component } from 'react';

var logout = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            error: false
        }
    },
    componentDidMount: function () {
        firebase.auth().signOut();
        this.setState({loggedIn: false});
        // this.context.router.replace('/');
    },
    render: function () {
        return (
        <div>
        <p>You are now logged out</p>
        </div>
        );
    }
});

module.exports = logout;