import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import config from '../../config';
import * as firebase from 'firebase';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FileUploader from 'react-firebase-file-uploader';
import RaisedButton from 'material-ui/RaisedButton';


<meta name="viewport" content="width=device-width" />

  class SellerConnect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          Country:'',
          Adress:'',
          lastName:'',
          firstName:'',
      };
    }

      componentDidMount(){
        var user = firebase.auth().currentUser;
        var Userid = user.uid;
        firebase.database().ref('SellerDetails/'+ Userid ).on("value", (snapshot) => {
            if(snapshot.exists()) {
            var ownerData = snapshot.val()
            var firstName = ownerData.firstName;
            var lastName = ownerData.lastName;
            var Adress = ownerData.Adress;
            var Country = ownerData.Country;

            this.setState({
                firstName:firstName,
                lastName:lastName,
                Adress:Adress,
                Country:Country,

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

    SubmitUserDetails(){
      var firstName = this.state.firstName;
      var lastName = this.state.lastName;
      var Adress = this.state.Adress;
      var Country = this.state.Country;

      firebase.database().ref('SellerDetails/' + Userid).set({
        firstName: firstName,
        lastName: lastName,
        Adress: Adress,
        Country: Country,
      });
    }

    render(){
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>

                   <Card className="pageStyle">
                   <p> We are a team of developers who want to change the landscape of R. By creating and sharing content we hope to enrich the R ecosystem in upcoming years.
                     <br/> <br/> After participating in the Google Summer of Code (as student and mentor) and working for various companies as freelancers, we noticed a missing part
                       in the R universe: A platform that enables ambitious programmers to share their expert knowledge, and to allow other developers to create applications/scripts with yet unseen quality.
                       <br/> <br/> The key to the success of R is its open source environment. We have thousands of free CRAN packages for almost every conceivable application.
                      Few players benefit from this: There are consulting firms that earn thousands of dollars for relatively simple apps and software companies that sell their "pro" solutions.
                      Our idea is that R has more democratic and monetarily distributed cultures in a competitive environment where contributing ideas to the community is just a click away.
                   </p>
                 </Card>
                
                <Card className="pageStyle">
                <p> We rely on Stripe as trusted partner to handle payments. Stripe Connect offers each sellers to create their own "account".
                  Stripe Connect is a service specificly created for service markets like R.Codes.
                  Below you find the stripe connect button where you need to create your personal stripe connect account.
                  Some information you have to provide may be redundant to the information given below, but since Stripe Connect is completly independent that step is a neccessity.
                  <br/>
                  <br/>
                  With the stripe connect any payment goes directly to your account and you can independently manage further transactions from there.
                </p>
              </Card>
              <Card className="pageStyle" style={{textAlign: 'center'}}>
                   {
                     this._userId() ?
                       <a href={this._stripeUrl()} className="stripe-connect">
                         <span>Connect with Stripe</span>
                       </a> : null
                   }
              </Card>
              <Card className="pageStyle" style={{marginBottom: 20, textAlign: 'center'}}>
                <RaisedButton label="Apply" secondary={true} style={{ margin: 12}} />
              </Card>
              </div>
        )
    }

};

SellerConnect.contextTypes = {
  /**
   * Holds the current logged in user
   * */
  currentUser: PropTypes.object
};

export default SellerConnect ;
