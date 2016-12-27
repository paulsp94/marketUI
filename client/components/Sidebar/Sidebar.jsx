import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router';
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
import firebase from 'firebase';
import firebase_details from '../../Firebase/Firebase';
import StripeCheckout from '../stripe/checkout';
import {productSellerandstripeid} from '../../action/action';
import StarRatingComponent from 'react-star-rating-component';

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

        this._submitHandler = this._submitHandler.bind(this);
    }

    productDetails () {

        return (
            <div className="sidebar-bottom">
              {/* <h4><strong> {this.props.productcoredetails.Title} </strong> <br/></h4> */}
              {
                this.props.Sidebar ?
                  <div>
                    <Card>
                      <h4 style={{ float: "left", marginLeft: 3 }}><strong>Packages:</strong> <br/></h4>
                      <div style={{ display: "flex", flexWrap: "wrap", margin: 9 }}>

                        {
                          this.props.Sidebar.Packages.map((detail, index)=> {
                            return <Chip style={{ float: "left", margin: 4 }} key={index}> {detail}</Chip>
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
                          this.props.Sidebar.compatibility.map((detail, index)=> {
                            return <Chip style={{ float: "left", margin: 4 }} key={index}> {detail}</Chip>
                          })
                        }

                      </div>
                    </Card>

                    <div style={{ flexWrap: "wrap", margin: 9 }}>
                      <h4 ><strong> Maintenance: </strong></h4>
                      <p> Last Updated {this.props.productcoredetails.date} </p>
                    </div>

                    <Card>
                      <h4 style={{ float: "left", marginLeft: 3 }}><strong> Tags: </strong></h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                        {
                          this.props.Sidebar.tags.map((detail, index)=> {
                            return <Chip style={{ float: "left", margin: 4 }} key={index}> {detail}</Chip>
                          })
                        }

                      </div>
                    </Card>
                  </div> : null
              }
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

    componentDidMount() {
        let {ProductId} = this.props;
        productSellerandstripeid(ProductId);
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

            <img className="Userimage"/>

            <br/>

            <CardText>
              <div className="userdescribation">
               Feature Comming SOON
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

        firebase
            .database().ref(`ProductCoreDetails/${productcoredetails.productid}`)
            .once('value')
            .then((snapshot) => {
              let details = snapshot.val();
              details.ratedCount = details.ratedCount ? details.ratedCount + 1 : 1;
              let oldAverage = prevValue ? prevValue : 0;
              details.rating = ((oldAverage * (details.ratedCount - 1)) + nextValue) / details.ratedCount;
              firebase.database().ref(`ProductCoreDetails/${productcoredetails.productid}`).set(details);
            });
    }

    ProductContentDownload(){
        var productid = this.props.ProductId;
        browserHistory.push('ProductContent/'+ productid);
    }

    render () {

        var currentstate = this.state.Currentstate;
        let {productcoredetails, sellerStripeAccountId} = this.props;

        if (currentstate == '0') {
            var subheader = <div>
              <div className="rating">
                <Table >
                  <TableBody displayRowCheckbox={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow  >
                      
                      <TableRowColumn style={{ textAlign: 'center' }}> ${productcoredetails.Price} </TableRowColumn>
                      <TableRowColumn style={{ textAlign: 'center' }}>
                        <StarRatingComponent
                            name="rating" /* name of the radio input, it is required */
                            value={productcoredetails.rating || 0} /* number of selected icon (`0` - none, `1` - first) */
                            onStarClick={this._submitHandler} /* on icon click handler */
                        />
                      </TableRowColumn>
                      <TableRowColumn style={{ textAlign: 'center' }}>
                        Sold: {productcoredetails.downloadCount || 0}
                      </TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>


                  <RaisedButton label="Download Content" onClick={this.ProductContentDownload.bind(this)} primary={true} style={{ margin: 12}}/>
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

        return (
            <div className="sidebar">
              <Card style={{backgroundColor: "#fdfdfb"}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

                <Tabs>
                  <Tab label="Item" onActive={this.Item.bind(this)}> </Tab>
                  <Tab label="Comments" onActive={this.Comments.bind(this)}>
                    <div className="sidebar-bottom">

                      <CardText>
                        <div className="usercommentname">
                          <input name="comment" ref={(g) => this.comment = g} onKeyDown={this.keyPress.bind(this)}
                                 className="inputfield-signup1" type="text"
                                 placeholder="Ask Questions about the product"/>
                          <br/>
                        </div>
                      </CardText>

                        {
                            allcomment.map((detail, index)=> {
                                return (
                                    <CardText key={index}>
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
