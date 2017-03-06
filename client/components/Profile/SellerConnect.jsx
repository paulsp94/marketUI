import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {hashHistory} from 'react-router';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import config from '../../config';
import * as firebase from 'firebase';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FileUploader from 'react-firebase-file-uploader';
import RaisedButton from 'material-ui/RaisedButton';


<meta name="viewport" content="width=device-width"/>

class SellerConnect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Country: '',
      Adress: '',
      lastName: '',
      firstName: '',
      userId: null
    };
  }
  
  componentDidMount() {
    this.context.currentUser && this._fetchUserDetails(this.context.currentUser.uid);
  }
  
  componentDidUpdate() {
    !this.state.userId && this.context.currentUser && this._fetchUserDetails(this.context.currentUser.uid);
  }
  
  _userId() {
    if (this.context.currentUser) {
      return this.context.currentUser.uid;
    }
    return null;
  }
  
  _fetchUserDetails(userId) {
    firebase.database()
      .ref('SellerDetails/' + userId)
      .on("value", (snapshot) => {
        if (!snapshot.exists()) {
          return;
        }
        
        var ownerData = snapshot.val();
        var firstName = ownerData.firstName;
        var lastName = ownerData.lastName;
        var Adress = ownerData.Adress;
        var Country = ownerData.Country;
        
        this.setState({
          firstName: firstName,
          lastName: lastName,
          Adress: Adress,
          Country: Country,
          userId: userId
        });
      });
  }
  
  _stripeUrl() {
    return (
      `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${config['stripe']['clientId']}&scope=read_write&state=${this._userId()}`
    );
  }
  
  SubmitUserDetails() {
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
  
  render() {
    return (
      <div className="container-search" style={{paddingTop: '1px'}}>
        
        <Card className="pageStyle">
          <p> We are a team of developers who want to change the landscape of R. By creating and sharing content we hope
            to enrich the R ecosystem in upcoming years.
            <br/> <br/> After participating in the Google Summer of Code (as student and mentor) and working for various
            companies as freelancers, we noticed a missing part
            in the R universe: A platform that enables ambitious programmers to share their expert knowledge, and to
            allow other developers to create applications/scripts with yet unseen quality.
            <br/> <br/> The key to the success of R is its open source environment. We have thousands of free CRAN
            packages for almost every conceivable application.
            Few players benefit from this: There are consulting firms that earn thousands of dollars for relatively
            simple apps and software companies that sell their "pro" solutions.
            Our idea is that R has more democratic and monetarily distributed cultures in a competitive environment
            where contributing ideas to the community is just a click away.
          </p>
        </Card>
        <Card className="pageStyle">
          <TextField
            hintText="First Name"
            value={this.state.firstName}
          />
          <br/>
          <TextField
            hintText="Last Name"
            value={this.state.lastName}
          />
          <br/>
          <TextField
            hintText="Adress"
            value={this.state.Adress}
          />
          <br/>
          
          <SelectField
            floatingLabelText="Country"
            value={this.state.Country}
            onChange={this.handleChange}
            maxHeight={200}
          >
            <MenuItem value={"Australia"} primaryText="Australia"/>
            <MenuItem value={"Austria"} primaryText="Austria"/>
            <MenuItem value={"Belgium"} primaryText="Belgium"/>
            <MenuItem value={"Canada"} primaryText="Canada"/>
            <MenuItem value={"Denmark"} primaryText="Denmark"/>
            <MenuItem value={"Finland"} primaryText="Denmark"/>
            <MenuItem value={"France"} primaryText="France"/>
            <MenuItem value={"Germany"} primaryText="Germany"/>
            <MenuItem value={"Hong Kong"} primaryText="Hong Kong"/>
            <MenuItem value={"Ireland"} primaryText="Ireland"/>
            <MenuItem value={"Italy"} primaryText="Italy"/>
            <MenuItem value={"Japan"} primaryText="Japan"/>
            <MenuItem value={"Luxembourg"} primaryText="Luxembourg"/>
            <MenuItem value={"Netherlands"} primaryText="Netherlands"/>
            <MenuItem value={"New Zealand"} primaryText="New Zealand"/>
            <MenuItem value={"Norway"} primaryText="Norway"/>
            <MenuItem value={"Portugal"} primaryText="Portugal"/>
            <MenuItem value={"Singapore"} primaryText="Singapore"/>
            <MenuItem value={"Spain"} primaryText="Spain"/>
            <MenuItem value={"Sweden"} primaryText="Sweden"/>
            <MenuItem value={"Switzerland"} primaryText="Switzerland"/>
            <MenuItem value={"United Kingdom"} primaryText="United Kingdom"/>
            <MenuItem value={"United States"} primaryText="United States"/>
          </SelectField>
          <br/>
          <br/>
          <p> Upload an ID Scan: <br/></p>
          <FileUploader
            accept="pp/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('pp/')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          
          <br/>
          <RaisedButton label="Save Changes" onTouchTap={this.SubmitUserDetails.bind(this)} secondary={true}
                        style={{margin: 12}}/>
        
        </Card>
        <Card className="pageStyle">
          <p> We rely on Stripe as trusted partner to handle payments. Stripe Connect offers each sellers to create
            their own "account".
            Stripe Connect is a service specificly created for service markets like R.Codes.
            Below you find the stripe connect button where you need to create your personal stripe connect account.
            Some information you have to provide may be redundant to the information given below, but since Stripe
            Connect is completly independent that step is a neccessity.
            <br/>
            <br/>
            With the stripe connect any payment goes directly to your account and you can independently manage further
            transactions from there.
          </p>
        </Card>
        <Card className="pageStyle" style={{marginBottom: 20, textAlign: 'center'}}>
          {
            this._userId() ?
              <a href={this._stripeUrl()} className="stripe-connect">
                <span>Connect with Stripe</span>
              </a> : null
          }
        </Card>
      </div>
    )
  }
}

SellerConnect.contextTypes = {
  /**
   * Holds the current logged in user
   * */
  currentUser: PropTypes.object
};

export default SellerConnect ;
