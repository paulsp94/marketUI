import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

<meta name="viewport" content="width=device-width" />

var General = React.createClass({

    render(){

    var Introduction = <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> General Tab </h2>
                   </Card>
                  <Card className="pageStyle" style={{marginBottom: 20}}>
                  <p> In the general tab you can set the descriptions/images and titles of your items. For every input there is a live preview on the right, displaying how it will look like in the finished item.</p>
                  <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2FGeneral.png?alt=media&token=abece355-5ca5-4809-8662-8c30ab1248a7" style={{width:'100%'}} />

                  <br/>
                  <br/>
                  <p> The title and description should include the specific techniques & packages you use. Remember that the tutorial is ultimativly to allow users to reproduce the technique, but not specificly to the same application you did. Therefore in the title and description the technique itself has priority. </p>

                  <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2Fgeneral_card.png?alt=media&token=1337d8ba-1a0f-4db2-941a-b13eada0c939" style={{width:'100%'}} />
                  <br/>
                  <br/>
                  <p>Note: The title may only be 1 line, and the description a maximum of 3 lines.  </p>

                    
                </Card>
              </div>


        return (
        	<div style={{marginLeft: '260px'}}>
              {Introduction}
              <Drawer zDepth={5}>
                  <h2 style={{textAlign: 'center', marginBottom: '12px'}}> Documentation </h2>
                  <Divider />
                    <MenuItem containerElement={<Link to='/Reference/Introduction'/>}>Introduction</MenuItem>
                    <MenuItem style={{backgroundColor:'rgb(200,200,200)'}} containerElement={<Link to='/Reference/General'/>}>General</MenuItem>
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
                    <MenuItem containerElement={<Link to='/Reference/AuthorProfile'/>}>Author Profile</MenuItem>
              </Drawer>
          </div>
        )
    }

});

module.exports = General;
