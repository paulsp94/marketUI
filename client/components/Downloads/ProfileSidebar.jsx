import React, {Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

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

  render() {
    let stripeUrl = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${config['stripe']['clientId']}&scope=read_write`;

    return (
      <div className="sidebar">
        <Tabs>
          <Tab label="header">
            <Card expanded={this.state.expanded}>
              <CardText>
                <a href={stripeUrl} className="stripe-connect">
                  <span>Connect with Stripe</span>
                </a>
              </CardText>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}


export default ProfileSidebar ;



