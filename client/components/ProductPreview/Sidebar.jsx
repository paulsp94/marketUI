import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import {EnternewComment, ProductComments} from '../../action/action.jsx';
import firebase from 'firebase';
import StripeCheckout from '../stripe/checkout';
import {productSellerandstripeid} from '../../action/action';
import StarRatingComponent from 'react-star-rating-component';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    EnternewComment,
    ProductComments
  }, dispatch);
}

function mapStateToProps(store) {
  return {userdetails: store.userdetails};
}

@connect(mapStateToProps, mapDispatchToProps)

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Currenticon: '',
      Currentstate: '',
      expanded: false,
      showCheckboxes: false,
      Commentvalue: '',
      allcomment: '',
      Description: '',
      tags: [],
      email: '',
      newComment: '',
      canRate: true
    };
    this._submitHandler = this._submitHandler.bind(this);
  }

  productDetails() {
    return (
      <div className="sidebar-bottom">
        {/* <h4><strong> {this.props.productcoredetails.Title} </strong> <br/></h4> */}
        {
          this.props.Sidebar ?
            <div>
              <Card>
                <h4 style={{float: "left", marginLeft: 3}}><strong>Packages:</strong> <br/></h4>
                <div style={{display: "flex", flexWrap: "wrap", margin: 9}}>

                  {
                    this.props.Sidebar.Packages.map((detail, index) => {
                      return <Chip style={{float: "left", margin: 4}} key={index}> {detail}</Chip>
                    })
                  }

                </div>
              </Card>
              <div style={{display: "inline-block"}}>
                <div style={{margin: 9, float: "left", marginTop: 0, marginBottom: 0}}>
                  <h4><strong>Complexity:</strong></h4>
                  <p>  {this.props.Sidebar.complexity} </p>
                </div>
                <div style={{margin: 9, float: "right", marginTop: 0, marginBottom: 0}}>
                  <h4><strong>Integration Time: </strong></h4>
                  {this.props.Sidebar.IntegrationTime}
                </div>
              </div>

              <Card>
                <h4 style={{float: "left", marginLeft: 3}}><strong> Compatibilty: </strong> <br/></h4>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>

                  {
                    this.props.Sidebar.compatibility.map((detail, index) => {
                      return <Chip style={{float: "left", margin: 4}} key={index}> {detail}</Chip>
                    })
                  }

                </div>
              </Card>

              <div style={{flexWrap: "wrap", margin: 9}}>
                <h4 ><strong> Maintenance: </strong></h4>
                <p> Last Updated {this.props.productcoredetails.date} </p>
              </div>

              <Card>
                <h4 style={{float: "left", marginLeft: 3}}><strong> Tags: </strong></h4>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>

                  {
                    this.props.Sidebar.tags.map((detail, index) => {
                      return <Chip style={{float: "left", margin: 4}} key={index}> {detail}</Chip>
                    })
                  }

                </div>
              </Card>
            </div> : null
        }
      </div>
    )
  }

  componentWillMount() {
    var curr_icon = this.productDetails();
    var statevalue = 0;

    this.setState({
      Currentstate: statevalue,
      Currenticon: curr_icon
    });
  }

  componentDidMount() {
    let {Productid} = this.props;
    productSellerandstripeid(Productid);

    firebase.database().ref('Product_creation/' +  Productid).once("value", (snapshot) => {

      var Userid = snapshot.val().userid;

      firebase.database().ref('ProductOwnerDetails/' + Userid ).on("value", (snapshot) => {
        if(snapshot.exists()) {
        var Description = snapshot.val().Description;
        var tags = snapshot.val().tags;
        var email = snapshot.val().email;

        this.setState({
          Description: Description,
          tags: tags,
          email: email,
        })
        }
      });
    });
  }

  Item() {
    var curr_icon = this.productDetails();

    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 0;
    this.setState({
      Currentstate: statevalue
    });
  }

  onNewCommentKeyPress = (event) => {
    if (event.keyCode == 13) {
      const {newComment} = this.state;
      const { Productid} = this.props;
      const user = firebase.auth().currentUser;
      this.props.EnternewComment(newComment,  Productid, user.email);
      this.setState({newComment: ''});
      this.props.ProductComments( Productid);
    }
  };

  Comments() {
    var curr_icon = <div></div>;

    this.setState({
      Currenticon: curr_icon
    });

    var statevalue = 1;
    this.setState({
      Currentstate: statevalue
    });
  }

  Support() {
    var curr_icon = <div>
      <div className="sidebar-bottom">
        <CardText>
          <div className="userdescribation">
            <strong>Contact Email: </strong>{this.state.email}
          </div>
          <hr/>
          <div className="userdescribation">
            {this.state.Description}
          </div>
          <hr/>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {this.state.tags.map((item, index) =>
              <Chip key={index} style={{float: "left", margin: 4}}>{item}</Chip>
            )}
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

  _submitHandler(nextValue, prevValue, name) {
    let {productcoredetails} = this.props;
    let {canRate} = this.state;
    if (canRate) {
      firebase
        .database().ref('ProductCoreDetails/' + productcoredetails.productid + '/Private')
        .once('value')
        .then((snapshot) => {
          let details = snapshot.val();
          details.ratedCount = details.ratedCount ? details.ratedCount + 1 : 1;
          let oldAverage = details.rating ? details.rating : 0;
          details.rating = (((oldAverage * (details.ratedCount - 1)) + nextValue) / details.ratedCount).toFixed(2);
          firebase.database().ref('ProductCoreDetails/' + productcoredetails.productid + '/Private').set(details);
        });

      this.setState({canRate: false});
      setTimeout(() => {
        this.setState({canRate: true});
      }, 1000);
    }
  }

  ProductContentDownload() {
    let productid = this.props. Productid;
    firebase
      .database().ref('ProductCoreDetails/' + productid + '/Public')
      .once('value')
      .then((snapshot) => {
        let details = snapshot.val();
        details.downloadCount = details.downloadCount ? (details.downloadCount + 1) : 1;
        firebase.database().ref('ProductCoreDetails/' + productid + '/Public').set(details);
      });
    browserHistory.push('ProductContent/' + productid);
  }

  onNewCommentChange = (event, value) => {
    this.setState({
      newComment: value
    });
  };

  render() {
    var currentstate = this.state.Currentstate;
    let {productcoredetails, sellerStripeAccountId} = this.props;

    if (currentstate == '0') {
      var subheader = <div>
        <div className="rating">
          <Table selectable={false}>
            <TableBody displayRowCheckbox={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
              <TableRow  >

                <TableRowColumn style={{textAlign: 'center'}}> FREE </TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>
                  <StarRatingComponent
                    name="rating" /* name of the radio input, it is required */
                    value={parseInt(productcoredetails.rating , 10) || 0} /* number of selected icon (`0` - none, `1` - first) */
                    onStarClick={this._submitHandler} /* on icon click handler */
                  />
                </TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>
                  Downloads: {productcoredetails.downloadCount || "none"}
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <p> add expanded license text here </p> 
          <RaisedButton label="View Code" onTouchTap={this.ProductContentDownload.bind(this)} secondary={true}
                        style={{margin: 12}} disabled={false} />
         
          {/*// TODO feed me real data, amount in cents */}
          {
            /*sellerStripeAccountId ?*/
            /*<StripeCheckout*/
            /*productId={productcoredetails.productid}*/
            /*amount={parseInt(productcoredetails.Price * 100)}*/
            /*sellerId={sellerStripeAccountId} /> : null*/
          }

        </div>
      </div>
    }
    else {
      var subheader = '';
    }

    var allcomment = this.props.Comments;
    var alldatenumber = [];
    var sortedcomment = [];

    if (allcomment.length == 1 || allcomment.length == 0) {
      sortedcomment = allcomment
    }
    else {
      for (var i = 0; i < allcomment.length; i++) {
        alldatenumber.push(allcomment[i].datenumber);
      }

      alldatenumber = alldatenumber.sort(function (a, b) {
        return b - a
      });

      for (var j = 0; j < alldatenumber.length; j++) {
        for (var k = 0; k < allcomment.length; k++) {
          if (alldatenumber[j] == allcomment[k].datenumber) {
            sortedcomment.push(allcomment[k]);
          }
        }
      }
    }

    const {newComment} = this.state;
    var user = firebase.auth().currentUser;
    var commentsAuthToggle = user ?
            <TextField
              floatingLabelText="Leave a comment"
              floatingLabelStyle={{fontWeight: 'normal'}}
              fullWidth
              value={newComment}
              onChange={this.onNewCommentChange}
              onKeyDown={this.onNewCommentKeyPress}
            /> :
            <TextField
              floatingLabelText="Login to write comments"
              floatingLabelStyle={{fontWeight: 'normal'}}
              fullWidth
              disabled={true}
              value={newComment}
              onChange={this.onNewCommentChange}
              onKeyDown={this.onNewCommentKeyPress}
            />;

    return (
      <div className="sidebar">
        <Card style={{backgroundColor: "#fdfdfb"}} expanded={this.state.expanded}
              onExpandChange={this.handleExpandChange}>

          <Tabs>
            <Tab label="Item" onActive={this.Item.bind(this)}> </Tab>
            <Tab label="Comments" onActive={this.Comments.bind(this)}>
              <div className="sidebar-bottom-comments">
                <CardText>
                  <div className="usercommentname">
                    {commentsAuthToggle}
                    <br/>
                   </div>
                </CardText>
                {
                  sortedcomment.map((detail, index) => {
                    return (
                      <div key={index} className="commentContainer">
                        <div className="productcomments">
                          <div className="usercommentname dateincomment">
                            <strong> <span className="">  {detail.Username} | {detail.date} </span> <br/>
                            </strong>
                          </div>
                          <div className="usercomments">
                            <p>
                              {detail.Comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </Tab>
            <Tab label="Support" onActive={this.Support.bind(this)}> </Tab>
          </Tabs>
          {subheader}
          {this.state.Currenticon}
        </Card>
      </div>
    )
  }
}

export default Sidebar ;
