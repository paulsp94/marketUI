import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

<meta name="viewport" content="width=device-width" />

var MediaUpload = React.createClass({

    render(){

    var Introduction = <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> Media Upload </h2>
                   </Card>
                  <Card className="pageStyle" style={{marginBottom: 20}}>
                  <p> As most tutorials/item require some kind of media upload, whether its a .csv file or a plot image. Therefore we added an easy to use media uploader.  </p>
                <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2FmediaUploader.png?alt=media&token=e137c2b8-f038-4749-87b1-b153085fc089" style={{width:'100%'}} />
                <p> We allow to upload any file while we limit the maximum upload size to 100 MB per project. If you have bigger files to upload contact us and we will upload those files on a seperate Amazon S3 storage. </p>
                <br/>

                <h4> Uploading Datasets: </h4>
                <hr/>
                <p> In many tutorials and applications it is neccessary to include datasets. While you can always rely on R internal datasets or linking to .CSV files,
                  the most convenient way is to embedd the link directly in the Code: <br/>
                <code>
                <br/>
                1. upload your .csv via the media uploader <br/>
                2. library(data.table) <br/>
                3. data = fread('url')
                </code>
                </p>
                <br/>
                <h4> Uploading RMarkdown Files: </h4>
                <hr/>
                <p>To make the creation of R content on R.Codes easier, we allow Iframe embeddings of Rmarkdown html files directly from RStudio&reg; .
                  Just knit your RStudio Markdown document to html, and then upload the .html file via the media uploader.
                  Of the 3 links you get from the media uploader, use the Iframe link and copy it over to the markdown part. All interactivity from your Rmarkdown plots will be still active.
                </p>
                <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/HTMLstorage%2F-KaA9VcBH8ovnYPgwriJ%2F69870ff2-01e5-4017-92f0-bbe40e1ca27e.png?alt=media&token=8bfb17ac-d207-434c-8afc-089dd247feb6" style={{width:'100%'}} />

                <br/>
                <br/>
                <h4> Uploading .zip Files: </h4>
                <hr/>
                <p> Adding a downloadable file such as a .zip file is easy. Just upload your file via the media uploader and add the link to a href html tag: <br/> <br/>
                <code>&lt;a href=&quot;https://url&quot;&gt;Download&lt;/a&gt;</code> </p>

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
                    <MenuItem containerElement={<Link to='/Reference/Sidebar'/>}>Sidebar</MenuItem>
                  <Divider />

                    <MenuItem containerElement={<Link to='/Reference/Markdown'/>}>Markdown</MenuItem>
                    <MenuItem style={{backgroundColor:'rgb(200,200,200)'}} containerElement={<Link to='/Reference/MediaUpload'/>}>Media Upload</MenuItem>
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

module.exports = MediaUpload;
