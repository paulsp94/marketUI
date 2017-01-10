import React, {Component, PropTypes} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as firebase from 'firebase';
import Chip from 'material-ui/Chip';
import config from '../../config';

class ProfileSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        Currenticon: '',
        Currentstate: '',
        showCheckboxes: false,
        Description:'',
        tags:[''],
    };
  }

    componentDidMount(){
      var user = firebase.auth().currentUser;
      var Userid = user.uid;
      firebase.database().ref('ProductOwnerDetails/'+ Userid ).on("value", (snapshot) => {
          if(snapshot.exists()) {
          var Description = snapshot.val().Description;
          var tags = snapshot.val().tags;
          

          this.setState({
              Description:Description,
              tags:tags,
         
            });
          };
       });

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
          <Tab label="Your public information">
            <Card>
              <CardText>
                {/*
                  this._userId() ?
                    <a href={this._stripeUrl()} className="stripe-connect">
                      <span>Connect with Stripe</span>
                    </a> : null
                */}
                  <hr/>
                  
                  {this.state.Description}
                  <hr/>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {this.state.tags.map((item, index) =>
                                        <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
                                )}
                    </div>;
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