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

<meta name="viewport" content="width=device-width" />

  class SellerConnect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          Currenticon: '',
          Currentstate: '',
          showCheckboxes: false,
          Description:'',
          tags:[''],
          value:'',
          mail:'',
      };
    }

      componentDidMount(){
        var user = firebase.auth().currentUser;
        var Userid = user.uid;
        firebase.database().ref('ProductOwnerDetails/'+ Userid ).on("value", (snapshot) => {
            if(snapshot.exists()) {
            var ownerData = snapshot.val()
            var Description = ownerData.Description;
            var tags = ownerData.tags;
            var mail = ownerData.email;

            this.setState({
                Description:Description,
                tags:tags,
                mail:mail,

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
                    <TextField
                      hintText="First Name"
                    />
                  <br/>
                    <TextField
                      hintText="Last Name"
                    />
                  <br/>
                    <TextField
                      hintText="Adress"
                    />
                  <br/>

          <SelectField
                  floatingLabelText="Country"
                  value={this.state.value}
                  onChange={this.handleChange}
                  maxHeight={200}
                >
                  <MenuItem value={"Australia"} primaryText="Australia" />
                  <MenuItem value={"Austria"} primaryText="Austria" />
                  <MenuItem value={"Belgium"} primaryText="Belgium" />
                  <MenuItem value={"Canada"} primaryText="Canada" />
                  <MenuItem value={"Denmark"} primaryText="Denmark" />
                  <MenuItem value={"Finland"} primaryText="Denmark" />
                  <MenuItem value={"France"} primaryText="France" />
                  <MenuItem value={"Germany"} primaryText="Germany" />
                  <MenuItem value={"Hong Kong"} primaryText="Hong Kong" />
                  <MenuItem value={"Ireland"} primaryText="Ireland" />
                  <MenuItem value={"Italy"} primaryText="Italy" />
                  <MenuItem value={"Japan"} primaryText="Japan" />
                  <MenuItem value={"Luxembourg"} primaryText="Luxembourg" />
                  <MenuItem value={"Netherlands"} primaryText="Netherlands" />
                  <MenuItem value={"New Zealand"} primaryText="New Zealand" />
                  <MenuItem value={"Norway"} primaryText="Norway" />
                  <MenuItem value={"Portugal"} primaryText="Portugal" />
                  <MenuItem value={"Singapore"} primaryText="Singapore" />
                  <MenuItem value={"Spain"} primaryText="Spain" />
                  <MenuItem value={"Sweden"} primaryText="Sweden" />
                  <MenuItem value={"Switzerland"} primaryText="Switzerland" />
                  <MenuItem value={"United Kingdom"} primaryText="United Kingdom" />
                  <MenuItem value={"United States"} primaryText="United States" />
          </SelectField>
          <br/>



          <br/>
          <br/>
          <p> Upload an ID Scan: <br/>
                    <FileUploader
                      accept="pp/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={firebase.storage().ref('pp/' )}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                    />
                </p>

                </Card>
                <Card className="pageStyle">
                <p> We are a team of developers who want to change the landscape of R. By creating and sharing content we hope to enrich the R ecosystem in upcoming years.
                  <br/> <br/> After participating in the Google Summer of Code (as student and mentor) and working for various companies as freelancers, we noticed a missing part
                    in the R universe: A platform that enables ambitious programmers to share their expert knowledge, and to allow other developers to create applications/scripts with yet unseen quality.
                    <br/> <br/> The key to the success of R is its open source environment. We have thousands of free CRAN packages for almost every conceivable application.
                   Few players benefit from this: There are consulting firms that earn thousands of dollars for relatively simple apps and software companies that sell their "pro" solutions.
                   Our idea is that R has more democratic and monetarily distributed cultures in a competitive environment where contributing ideas to the community is just a click away.
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

};

SellerConnect.contextTypes = {
  /**
   * Holds the current logged in user
   * */
  currentUser: PropTypes.object
};

export default SellerConnect ;
