import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';

<meta name="viewport" content="width=device-width" />

var About = React.createClass({
    render(){

        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                  <Card className="pageStyle">
                   <h2 style={{textAlign:'center'}}> About </h2>
                   </Card>
                  <Card className="pageStyle" style={{marginBottom: 20}}>
                  <p> We are a team of developers who want to change the landscape of R. By creating and sharing content we hope to enrich the R ecosystem in upcoming years.
                    <br/> <br/> After participating in the Google Summer of Code (as student and mentor) and working for various companies as freelancers, we noticed a missing part
                      in the R universe: A platform that enables ambitious programmers to share their expert knowledge, and to allow other developers to create applications/scripts with yet unseen quality.
                      <br/> <br/> The key to the success of R is its open source environment. We have thousands of free CRAN packages for almost every conceivable application.
                     Few players benefit from this: There are consulting firms that earn thousands of dollars for relatively simple apps and software companies that sell their "pro" solutions.
                     Our idea is that R has more democratic and monetarily distributed cultures in a competitive environment where contributing ideas to the community is just a click away.
                     <br/> <br/> Greetings, <br/> Robin Kohze, R.Codes . </p>
                </Card>
              </div>
        )
    }

});

module.exports = About;
