import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

<meta name="viewport" content="width=device-width" />

var AuthorProfile = React.createClass({

    render(){

    var Introduction = <div className="container-search" style={{paddingTop:'1px'}}>
                        <Card className="pageStyle">
                           <h2 style={{textAlign:'center'}}> Author Profile </h2>
                        </Card>
                        <Card className="pageStyle" style={{marginBottom: 20}}>
                          <p> Adding content to R.Codes is about creating value, not only to the community, but also improving your own status in the community.
                        Adding your Skills and a short description will help you find potential clients that are interested in the domain knowledge you have. </p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2Fauthor_profile.png?alt=media&token=98d7cd3d-3b71-4e52-9659-73bca4e06508" style={{width:'100%'}} />
                        <br/>
                        <br/>
                        <p> The description will then appear at the support tab in each of your products </p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2Fsupport.png?alt=media&token=7af82c7a-c8d1-459a-b874-38a7dd8869ce" style={{width:'100%'}} />
                        <br/>
                        <br/>
                        <p> While we display your email, we made sure that no algorithm can extract that email for spamming purposes. In the next weeks we will further improve the author profile options.</p>
                        </Card>
                      </div>

        return (
        	<div style={{marginLeft: '260px'}}>
              {Introduction}
              <Drawer zDepth={5}>
                  <h2 style={{textAlign: 'center', marginBottom: '12px'}}> Documentation </h2>
                  <Divider />
                    <MenuItem containerElement={<Link to='/Reference/Introduction'/>}>Introduction</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/General'/>}>General</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/Description'/>}>Description</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/Content'/>}>Content</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/Sidebar'/>}>Sidebar</MenuItem>
                  <Divider />
                    <MenuItem containerElement={<Link to='/Reference/Markdown'/>}>Markdown</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/MediaUpload'/>}>Media Upload</MenuItem>
                  <Divider />
                    <MenuItem containerElement={<Link to='/Reference/Selling'/>}>Selling Items</MenuItem>
                    <MenuItem containerElement={<Link to='/Reference/Pricing'/>}>Pricing & Stripe</MenuItem>
                  <Divider />
                   <MenuItem style={{backgroundColor:'rgb(200,200,200)'}} containerElement={<Link to='/Reference/AuthorProfile'/>}>Author Profile</MenuItem>
              </Drawer>
          </div>
        )
    }

});

module.exports = AuthorProfile;
