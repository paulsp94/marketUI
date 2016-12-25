import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import AdminComponent from '../components/admin/index';

class Admin extends React.Component {
  static displayName = 'Admin';

  render() {
    return (
      <AdminComponent />
    );
  }
}

export default Admin;
