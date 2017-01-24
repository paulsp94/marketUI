import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card} from 'material-ui/Card';

var Impressum = React.createClass({
    render(){
        return (
              <div className="container-search" style={{paddingTop:'1px'}}>
                    <Card className="pageStyle">
                       <h2 style={{textAlign:'center'}}> Impressum </h2>
                    </Card>
                    <Card className="pageStyle" style={{marginBottom: 20}}>
                      <p> Platform: R.Codes</p>
                      <p> Company: Vaionex Corporation </p>
                      <p> Email: contact@R.Codes </p>
                      <p> Adress: 122 Stuart Dr, 19901-5825 Dover </p>
                      <p> State: Delaware, USA </p>
                      <p> CEO: Robin Kohze </p>
                    </Card>
              </div>
        )
    }
});

module.exports = Impressum;
