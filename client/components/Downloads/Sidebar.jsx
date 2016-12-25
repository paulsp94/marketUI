import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import Chip from 'material-ui/Chip';
import LazyLoad from 'react-lazyload';

class Sidebar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      Currenticon: '',
      Currentstate: '',
      expanded: false,
      showCheckboxes: false,

    };
  }

  componentWillMount () {
    var statevalue = 0;
    this.setState({
      Currentstate: statevalue
    });

  }


  Item () {

    var curr_icon = "";
    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 0;
    this.setState({
      Currentstate: statevalue
    });

  }

  Comments () {


    var curr_icon = <div>
      <div className="sidebar-bottom">
        <CardText>

            {this.props.productcomment.map((item, index) =>
            <div>
                <div className="usercommentname">
                <h4><strong> {item.Username} </strong> <br/></h4>
                </div>
                <div className="usercomments">
                <p>
                    {item.Comment}
                </p>
                </div>
                <hr/>
            </div>
            )}
        </CardText>
      </div>
    </div>;

    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 1;
    this.setState({
      Currentstate: statevalue
    });
  }

  Support () {

    var curr_icon = <div>
      <hr/>
      <div className="sidebar-bottom">
        <LazyLoad height={'100%'} resize={true} >
          <img className="Userimage" src={'client/Images/deep.jpg'}/> <br/>
        </LazyLoad>
        <CardText>
          <div className="userdescribation">
            <p>
              I have successful Web Developer with Nearly 2 Year experience.

              Currently working as freelancer/contract Front hand Developer in Germany.

              My Core Expertise is

              React.js, Flux, Fetch Api and Redux
              Web designing ( Html, css3, JavaScript and jQuery )
              Backhand development (Php Laravel framework, MySQL, Firebase)
            </p>
            <hr/>
            <strong>Email:</strong> komaldeep1993@gmail.com<br/>
            <h4><strong> Experience </strong> <br/></h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Chip style={{ float: "left", margin: 2 }}>Html </Chip>
              <Chip style={{ float: "left", margin: 2 }}>CSS </Chip>
              <Chip style={{ float: "left", margin: 2 }}>Javascript </Chip>
              <Chip style={{ float: "left", margin: 2 }}>Jquery </Chip>
              <Chip style={{ float: "left", margin: 2 }}>Firebase </Chip>
            </div>

          </div>
        </CardText>
      </div>
    </div>;

    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 1;
    this.setState({
      Currentstate: statevalue
    });

  }

  render () {

    var currentstate = this.state.Currentstate;


    if (currentstate == '0') {
      var subheader = <div>
        <div className="rating">
          <Card>
            <Table >
              <TableBody displayRowCheckbox={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                <TableRow  >
                  <TableRowColumn style={{ textAlign: 'center' }}>Rating: 4.5</TableRowColumn>
                  <TableRowColumn style={{ textAlign: 'center' }}>$10</TableRowColumn>
                  <TableRowColumn style={{ textAlign: 'center' }}>Sold: 310</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </Card></div>
      </div>
    }
    else {
      var subheader = '';
    }

    if (currentstate == '0') {
      var prodctdetails =
        <div className="sidebar-bottom">
          <h4><strong>  </strong> <br/></h4>

          <Card>
              <h4><strong>Packages:</strong></h4>
              <div style={{ display: "flex", flexWrap: "wrap", margin: 9 }}>
              {this.props.Packages.map((item, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
              )}
              </div>
          </Card>


          <div style={{ flexWrap: 'wrap', margin: 9 }}>
            <h4><strong>Complexity:</strong></h4>
            <p> {this.props.complexity} </p>
            <h4><strong>Integration Time: </strong></h4>
            {this.props.IntegrationTime}
          </div>

          <Card>
            <h4 style={{ float: "left", marginLeft: 3 }}><strong> Compatibilty: </strong> <br/></h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Chip style={{ float: "left", margin: 4 }}> {this.props.compatibility} </Chip>
            </div>
          </Card>

          <Card>
            <h4 style={{ float: "left", marginLeft: 3 }}><strong> Tags: </strong></h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.props.tags.map((item, index) =>
                    <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
                )}
            </div>
          </Card>
        </div>;
    }
    else {
      var prodctdetails = " ";
    }

    return (
      <div className="sidebar">
        <Card style={{ backgroundColor: "#fdfdfb" }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

          <Tabs>
            <Tab label="Item" onActive={this.Item.bind(this)}> </Tab>
            <Tab label="Comments" onActive={this.Comments.bind(this)}> </Tab>
            <Tab label="Support" onActive={this.Support.bind(this)}> </Tab>
          </Tabs>

          {subheader}
          {prodctdetails}
          {this.state.Currenticon}
        </Card>
      </div>
    )
  }
}

export default Sidebar ;