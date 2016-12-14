import React, {Component, PropTypes} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as firebase from 'firebase';

import config from '../../config';

class ProfileSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Currenticon: '',
      Currentstate: '',
      expanded: false,
      showCheckboxes: false,
    };
  }

  _userId() {
    if(this.context.currentUser) {
      return this.context.currentUser.uid;
    }
    return null;
  }

  _stripeUrl() {
    return(
      `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${config['stripe']['clientId']}&scope=read_write&state=${this._userId()}`
    );
  }

  render() {
    return (
      <div className="sidebar">
        <Tabs>
          <Tab label="header">
            <Card expanded={this.state.expanded}>
              <CardText>
                {
                  this._userId() ?
                    <a href={this._stripeUrl()} className="stripe-connect">
                      <span>Connect with Stripe</span>
                    </a> : null
                }
              </CardText>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

ProfileSidebar.contextTypes = {
  /**
   * Holds the current logged in user
   * */
  currentUser: PropTypes.object
};
export default ProfileSidebar ;



