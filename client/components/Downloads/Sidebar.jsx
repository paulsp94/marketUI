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

class Sidebar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      Currenticon: '',
      Currentstate: '',
      expanded: false,
      showCheckboxes: false,
        IntegrationTime:'',
        Packages:[],
        complexity:'',
        compatibility:[],
        tags:[],
    };
  }

  componentWillMount () {
    var statevalue = 0;
    this.setState({
      Currentstate: statevalue
    });

      var productid = this.props.productid;
      firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(productid).on("child_added", (snapshot) => {


          var IntegrationTime = snapshot.val().IntegrationTime;
          var Packages= snapshot.val().Packages;
          var compatibility= snapshot.val().compatibility;
          var complexity= snapshot.val().complexity;
          var tags= snapshot.val().tags;

          this.setState({
              IntegrationTime,
              Packages,
              complexity,
              compatibility,
              tags
          })
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
          <div className="usercommentname">
            <h4><strong> Komaldeep Singh </strong> <br/></h4>
          </div>
          <div className="usercomments">
            <p>
              Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter
              nahm und diese durcheinander warf um ein Musterbuch zu
            </p>
          </div>
          <hr/>

          <hr/>
          <div className="usercommentname">
            <h4><strong> Sonam Malhotra </strong> <br/></h4>
          </div>
          <div className="usercomments">
            <p>
              Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere
              bewusst (beeinflusst von Witz und des eigenen Geschmacks)
            </p>
          </div>
          <hr/>

          <hr/>
          <div className="usercommentname">
            <h4><strong> Sonam </strong> <br/></h4>
          </div>
          <div className="usercomments">
            <p>
              Can you guide me ? How to improve the performance of this
            </p>
          </div>
          <hr/>

          <hr/>
          <div className="usercommentname">
            <h4><strong> Sonam </strong> <br/></h4>
          </div>
          <div className="usercomments">
            <p>
              Can you guide me ? How to improve the performance of this
            </p>
          </div>
          <hr/>

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
        <img className="Userimage" src={'client/Images/deep.jpg'}/> <br/>
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
          <h4><strong> {this.props.productid} </strong> <br/></h4>

          <Card>
              <h4><strong>Packages:</strong></h4>
              <div style={{ display: "flex", flexWrap: "wrap", margin: 9 }}>
              {this.state.Packages.map((item, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
              )}
              </div>
          </Card>


          <div style={{ flexWrap: 'wrap', margin: 9 }}>
            <h4><strong>Complexity:</strong></h4>
            <p> {this.state.complexity} </p>
            <h4><strong>Integration Time: </strong></h4>
            {this.state.IntegrationTime}
          </div>

          <Card>
            <h4 style={{ float: "left", marginLeft: 3 }}><strong> Compatibilty: </strong> <br/></h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Chip style={{ float: "left", margin: 4 }}> {this.state.compatibility} </Chip>
            </div>
          </Card>

          <Card>
            <h4 style={{ float: "left", marginLeft: 3 }}><strong> Tags: </strong></h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.tags.map((item, index) =>
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
            <Tab label="Supports" onActive={this.Support.bind(this)}> </Tab>
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