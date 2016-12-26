import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import Loading from 'react-loading';

import AdminComponent from '../components/admin/index';

class Admin extends React.Component {
  static displayName = 'Admin';

  constructor(props, context) {
    super(props, context);
    this.state = {
      isAdmin: false
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('admin')
      .once('value')
      .then((snapshot) => {
        let response = snapshot.val();
        let adminIds = [];

        for (let adminKey of Object.keys(response)) {
          adminIds.push(response[adminKey]['userId']);
        }

        let currentUserId = firebase.auth().currentUser.uid;
        if (adminIds.includes(currentUserId)) {
          this.setState({isAdmin: true});
        } else {
          browserHistory.push('/');
        }
      });
  }

  render() {
    let {isAdmin} = this.state;
    if(isAdmin) {
      return <AdminComponent />;
    }

    return(
      <div className="background">
        <div className="loader">
          <Loading type='spin' color='#000000' />
        </div>
      </div>
    );
  }
}

export default Admin;
