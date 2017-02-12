import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

<meta name="viewport" content="width=device-width" />

var Sidebar = React.createClass({

    render(){

    var Introduction = <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> Sidebar Tab </h2>
                  </Card>
                 <Card className="pageStyle" style={{marginBottom: 20}}>
                  <p>  In the sidebar tab you can specify the requirements of your item. Dont forget to press enter after each tag.</p>

                  <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2FSidebar2.png?alt=media&token=8ad92fd9-220b-42d5-ab5b-506bd3e1bde9" style={{width:'100%'}} />
                  <br/>
                  <br/>
                  <p> After completing all inputs, submit your item. We will then review your item and publish it to the public.</p>
                 </Card>
              </div>


        return (
        	<div style={{marginLeft: '260px'}}>
              {Introduction}
              <Drawer zDepth={5}>
                  <h2 style={{textAlign: 'center', marginBottom: '12px'}}> Documentation </h2>
                  <Divider />
	                  <MenuItem containerElement={<Link to='/Reference/Introduction'/>}>Introduction</MenuItem>
                    <MenuItem  containerElement={<Link to='/Reference/General'/>}>General</MenuItem>
	                  <MenuItem containerElement={<Link to='/Reference/Description'/>}>Description</MenuItem>
	                  <MenuItem containerElement={<Link to='/Reference/Content'/>}>Content</MenuItem>
	                  <MenuItem style={{backgroundColor:'rgb(200,200,200)'}} containerElement={<Link to='/Reference/Sidebar'/>}>Sidebar</MenuItem>
                  <Divider />
	                  <MenuItem containerElement={<Link to='/Reference/Markdown'/>}>Markdown</MenuItem>
	                  <MenuItem containerElement={<Link to='/Reference/MediaUpload'/>}>Media Upload</MenuItem>
                  <Divider />
                  	<MenuItem containerElement={<Link to='/Reference/Selling'/>}>Selling Items</MenuItem>
                  	<MenuItem containerElement={<Link to='/Reference/Pricing'/>}>Pricing & Stripe</MenuItem>
                  <Divider />
                    <MenuItem containerElement={<Link to='/Reference/AuthorProfile'/>}>Author Profile</MenuItem>
              </Drawer>
          </div>
        )
    }

});

module.exports = Sidebar;
