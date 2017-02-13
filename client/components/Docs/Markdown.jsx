import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

<meta name="viewport" content="width=device-width" />

var Markdown = React.createClass({

    render(){
      var Introduction = <div className="container-search" style={{paddingTop:'1px'}}>
                        <Card className="pageStyle">
                           <h2 style={{textAlign:'center'}}> Markdown </h2>
                        </Card>
                        <Card className="pageStyle" style={{marginBottom: 20}}>
                          <p> Markdown is a easy to use text based markup language. The content creation and description of each item is evaluated in Markdown, even when html content is added. Here some of the important markdown styles: </p>

                          <div>
                          <Card className="documentCard">
                          <h5>  Code Elements:  </h5>
                          <hr/>
                            <code >
                                ```<br/>
                                a = 5 <br/>
                                b = 6 <br/>
                                c = a*b <br/>
                                ```
                            </code>
                          </Card>

                            <Card className="documentCard">
                            <span><h5> Images </h5>
                            <hr/>
                                <p> We advice the html image embedding as you can make sure the width is always 100% </p> </span>
                                <code >
                                &lt;img src=&quot;https://s30.postimg.org/k64judynl/front_page.jpg&quot; style=&quot;width:100%;&quot;&gt;
                            </code>
                            </Card>

                            <Card className="documentCard">
                            <span><h5> Videos </h5>
                            <hr/>
                                <p> To integrate Videos from Youtube/Vimeo, just copy the embedd link over and adjust width and height</p> </span>
                                <code >
                                &lt;iframe width=&quot;100%&quot; height=&quot;515&quot; src=&quot;https://www.youtube.com/embed/0qo78R_yYFA&quot; &gt;&lt;/iframe&gt;
                            </code>
                            </Card>

                            <Card className="documentCard">
                            <span><h5> Create Table of Content </h5>
                             <hr/>
                              <p> Integrating a table of content for your viewer is easy. Just add the following tags in your code: </p> </span>
                              <code >
                              &lt;a name=&quot;Main Heading&quot; level=&quot;title&quot;/&gt;
                              &lt;a name=&quot;Sub Heading&quot; level=&quot;subtitle&quot;/&gt;
                              </code>
                              </Card>
                              <Card className="documentCard">
                              <span><h5> Iframes </h5>
                              <hr/>
                              <p> To embedd examples such as shiny applications you can embedd pages via Iframes <br/>
                           You can change the height in the tag according to your needs (eg. 300px, 500px, 1000px)</p> </span>
                              <code>
                              &lt;iframe src=&quot;http://www.w3schools.com&quot; style=&quot;width: 100%, height: 300px&quot;&gt;&lt;/iframe&gt;
                          </code>
                          </Card>


                          </div>
                          <Card className="documentCard">
                          <h5> Titles </h5>
                          <hr/>
                          <div style={{backgroundColor: 'rgb(245,245,245)', padding: '10px'}}>
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Markdown</th>
                                      <th>HTML</th>
                                      <th>Output</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td># Title</td>
                                      <td><code> &lt;h1&gt; Title &lt;/h1&gt;</code></td>
                                      <td> <h1> Title </h1></td>
                                    </tr>
                                    <tr>
                                      <td>## Title</td>
                                      <td><code> &lt;h2&gt; Title &lt;/h2&gt;</code></td>
                                      <td> <h2> Title </h2></td>
                                    </tr>
                                    <tr>
                                      <td>### Title</td>
                                      <td><code> &lt;h3&gt; Title &lt;/h3&gt;</code></td>
                                      <td> <h3> Title </h3
                                      ></td>
                                    </tr>
                                     <tr>
                                      <td>#### Title</td>
                                      <td><code> &lt;h4&gt; Title &lt;/h4&gt;</code></td>
                                      <td> <h4> Title </h4>
                                      </td>
                                    </tr>
                                     <tr>
                                      <td>##### Title</td>
                                      <td><code> &lt;h5&gt; Title &lt;/h5&gt;</code></td>
                                      <td> <h5> Title </h5>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>


                                </div>
                              </Card>
                                <br/>
                                <p> Those commands is just a fraction of all markdown commands - Find more in the mastering <a href="https://guides.github.com/features/mastering-markdown/">markdown guide </a>.
</p>
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
                    <MenuItem style={{backgroundColor:'rgb(200,200,200)'}} containerElement={<Link to='/Reference/Markdown'/>}>Markdown</MenuItem>
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

module.exports = Markdown;
