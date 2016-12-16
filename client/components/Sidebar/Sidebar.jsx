import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import { EnternewComment, ProductComments } from '../../action/action.jsx';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import StripeCheckout from '../stripe/checkout';

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    EnternewComment,
    ProductComments
  }, dispatch);
}

function mapStateToProps (store) {
  return { userdetails: store.userdetails };
}

@connect(mapStateToProps, mapDispatchToProps)

class Sidebar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      Currenticon: '',
      Currentstate: '',
      expanded: false,
      showCheckboxes: false,
      Commentvalue: '',
      allcomment: '',
    };
  }

  productDetails () {

    return (
      <div className="sidebar-bottom">
        <h4><strong> {this.props.productcoredetails.Title} </strong> <br/></h4>

        <Card>
          <h4 style={{ float: "left", marginLeft: 3 }}><strong>Packages:</strong> <br/></h4>
          <div style={{ display: "flex", flexWrap: "wrap", margin: 9 }}>

            {
              this.props.Sidebar.Packages.map((detail)=> {
                return <Chip style={{ float: "left", margin: 4 }}> {detail}</Chip>
              })
            }

          </div>
        </Card>

        <div style={{ flexWrap: 'wrap', margin: 9 }}>
          <h4><strong>Complexity:</strong></h4>
          <p>  {this.props.Sidebar.complexity} </p>
          <h4><strong>Integration Time: </strong></h4>
          {this.props.Sidebar.IntegrationTime}
        </div>

        <Card>
          <h4 style={{ float: "left", marginLeft: 3 }}><strong> Compatibilty: </strong> <br/></h4>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {
              this.props.Sidebar.compatibility.map((detail)=> {
                return <Chip style={{ float: "left", margin: 4 }}> {detail}</Chip>
              })
            }

          </div>
        </Card>

        <div style={{ flexWrap: "wrap", margin: 9 }}>
          <h4 ><strong> Maintenance: </strong></h4>
          <h5> 5 Versions</h5>
          <p> Last Updated 20-11-2015 </p>
        </div>

        <Card>
          <h4 style={{ float: "left", marginLeft: 3 }}><strong> Tags: </strong></h4>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {
              this.props.Sidebar.tags.map((detail)=> {
                return <Chip style={{ float: "left", margin: 4 }}> {detail}</Chip>
              })
            }

          </div>
        </Card>
      </div>
    )

  }

  componentWillMount () {
    var curr_icon = this.productDetails();
    var statevalue = 0;

    this.setState({
      Currentstate: statevalue,
      Currenticon: curr_icon
    });
  }

  Item () {

    var curr_icon = this.productDetails();

    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 0;
    this.setState({
      Currentstate: statevalue
    });

  }

  keyPress (event) {

    if (event.keyCode == 13) {

      var coment = this.comment.value;
      var ProductId = this.props.ProductId;

      var user = firebase.auth().currentUser;
      var Useremail = user.email;
      this.props.EnternewComment(coment, ProductId, Useremail);

      this.comment.value = '';
      this.props.ProductComments(ProductId);

    }
  }

  Comments () {

    var curr_icon = <div>

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
              <Chip style={{ float: "left", margin: 2 }}>Firebase3 </Chip>
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
          <Table >
            <TableBody displayRowCheckbox={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
              <TableRow  >
                <TableRowColumn style={{ textAlign: 'center' }}>Rating: 4.5</TableRowColumn>
                <TableRowColumn style={{ textAlign: 'center' }}>$10</TableRowColumn>
                <TableRowColumn style={{ textAlign: 'center' }}>Sold: 310</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          {/*// TODO feed me real data, amount in cents */}
          <StripeCheckout
            amount={1000}
            sellerId={'acct_19QfusKwrXhx81rS'} />
        </div>
      </div>
    }
    else {
      var subheader = '';
    }

    var allcomment = this.props.Comments;

    return (
      <div className="sidebar">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

          <Tabs>
            <Tab label="Item" onActive={this.Item.bind(this)}> </Tab>
            <Tab label="Comments" onActive={this.Comments.bind(this)}>
              <div className="sidebar-bottom">

                <CardText>
                  <div className="usercommentname">
                    <input name="comment" ref={(g) => this.comment = g} onKeyDown={this.keyPress.bind(this)}
                      className="inputfield-signup1" type="text"
                      placeholder="Ask Your Questions or Queries about the product"/>
                    <br/>
                  </div>
                </CardText>

                {
                  allcomment.map((detail)=> {

                    return (
                      <CardText>
                        <div className="usercommentname">
                          <h4><strong> {detail.Username} </strong> <br/></h4>
                        </div>
                        <div className="usercomments">
                          <p>
                            {detail.Comment}
                          </p>
                        </div>
                        <hr/>
                      </CardText>
                    )
                  })
                }
              </div>
            </Tab>
            <Tab label="Supports" onActive={this.Support.bind(this)}> </Tab>
          </Tabs>

          {subheader}
          {this.state.Currenticon}
        </Card>
      </div>

    )
  }
}

export default Sidebar ;



