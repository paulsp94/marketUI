import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { productEditValidationDetails, EnternewComment } from '../../action/action.jsx';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import TextField from 'material-ui/TextField';
import Download from 'material-ui/svg-icons/file/file-download';
import Cheerio from 'cheerio';
import Loading from 'react-loading';
import styles from './ProductContent.scss'
import classNames from 'classnames/bind'
import RaisedButton from 'material-ui/RaisedButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import Divider from 'material-ui/Divider';


const cx = classNames.bind(styles)

var data = "";

function mapStateToProps (store) {
  return { userdetails: store.userdetails };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    productEditValidationDetails,
      EnternewComment,
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class ProductContent extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
        preparingData: true,
        htmlData: null,
        authorProfile: false,
        contentData: true,
        comments: "",
        allcomments:'',
        Content:'',
        ProductId:'',
        Description:'',
        tags:[],
        email:'',
        newComment: ''
    };
  }

  componentWillMount () {

      var ProductId = this.props.params.productid;

      firebase.database().ref('Content').orderByChild('ProductId').equalTo(ProductId).on("child_added", (snapshot) => {


          var Content = snapshot.val().textfieldvalue1;

          let anchorTags = Cheerio.load(Content)('a');
          let list = [];
          for (let [index, anchorTag] of anchorTags.toArray().entries()) {
              let titleAttributes = {
                  key: index,
                  primaryText: anchorTag.attribs.name,
                  href: `#${anchorTag.attribs.name}`
              };

              if (anchorTag.attribs.level === 'subtitle') {
                  titleAttributes['style'] = {
                      backgroundColor: '#fff'
                  };
              }
              list.push(<MenuItem {...titleAttributes}/>)
          }

          this.setState({
              preparingData: false,
              htmlData: list,
              Content: Content,
          });

      });

  }

  componentDidMount(){

      var ProductId = this.props.params.productid;

      var allcomments = [];
      firebase.database().ref('Products_User_Comments').orderByChild('ProductId').equalTo(ProductId).on("child_added", (snapshot) => {

          allcomments.push({
              productid: snapshot.val().ProductId,
              Comment: snapshot.val().Comment,
              Username: snapshot.val().Username,
              date: snapshot.val().date,
              datenumber: snapshot.val().datenumber,
          });

          this.setState({
              allcomments
          });

      });

      this.setState({
          ProductId: ProductId,
          allcomments:allcomments,
      });

      firebase.database().ref('Product_creation/'+ ProductId).once("value", (snapshot) => {

          var Userid = snapshot.val().userid;

          firebase.database().ref('ProductOwnerDetails/' + Userid).on("value", (snapshot) => {

              var Description = snapshot.val().Description;
              var tags = snapshot.val().tags;
              var email = snapshot.val().email;

              this.setState({
                  Description: Description,
                  tags: tags,
                  email:email,
              })
          });

      });





  }

    onNewCommentChange = (event, value) => {
        this.setState({
            newComment: value
        });
    };

    onNewCommentKeyPress = (event) => {
        if (event.keyCode == 13) {
            const { newComment } = this.state;
            var ProductId = this.props.params.productid;
            const user = firebase.auth().currentUser;
            this.props.EnternewComment(newComment, ProductId, user.email);
            this.setState({newComment: ''});
        }
    };

  render () {

    let { preparingData, htmlData, authorProfile, comments, contentData } = this.state;


      var allcomment = this.state.allcomments;
      var alldatenumber = [];
      var sortedcomment = [];

      if(allcomment.length == 1 || allcomment.length == 0) {
          sortedcomment = allcomment;
      }
      else {
          for (var i = 0; i < allcomment.length; i++) {
              alldatenumber.push(allcomment[i].datenumber);
          }

          alldatenumber = alldatenumber.sort(function(a, b){return b-a});

          for(var j =0; j< alldatenumber.length; j++){

              for(var k =0; k< allcomment.length; k++) {

                  if(alldatenumber[j] == allcomment[k].datenumber){
                      sortedcomment.push(allcomment[k]);
                  }
              }
          }
      }

    let renderContent =
        // preparingData ? <Loading type='spin' color='#000000'/> :
      <div className="contentDownload">
        <div className="contentSidebar contentSidebarColor">
          <MenuItem
            onClick={() => this.setState({
              authorProfile: true,
              comments: false,
              contentData: false
            })}
            primaryText="Author Info"
            className="contentSidebarColor"
            leftIcon={<RemoveRedEye />}
          />
          <MenuItem
            onClick={() => this.setState({
              authorProfile: false,
              comments: true,
              contentData: false
            })}
            primaryText="Ask Question"
            className="contentSidebarColor" leftIcon={<PersonAdd />}
          />
          {/* <MenuItem primaryText="Download" leftIcon={<Download />}/> */}
          <Divider />
            {htmlData}

        </div>

        <div className="contentMarkdown" style={{ backgroundColor: "#fff" }}>
          {!contentData && <div className={cx('backlink-container')}>
            <RaisedButton
              label="Back To Content"
              primary
              onClick={() => this.setState({ contentData: true, authorProfile: false, comments: false })}
            />
          </div>}
          {contentData && <ReactMarkdown source={this.state.Content} escapeHtml={false}/>}
          {authorProfile &&
          <div>

              <div>
                  <div className="sidebar-bottom">
                      <img className="Userimage"/>
                      <CardText>
                          <br />
                          <div className="userdescribation">
                              <strong>Contact Email: </strong>{this.state.email}
                          </div>
                          <hr/>
                          <br/>
                          <div className="userdescribation">
                              {this.state.Description}
                          </div>
                          <br/>
                          <hr/>
                          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                              {this.state.tags.map((item, index) =>
                                  <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
                              )}
                          </div>
                      </CardText>
                  </div>
              </div>


          </div>}
          {comments && 
          <div>

              <CardText>
                  <div className="usercommentname">
                      <TextField
                          floatingLabelText="Leave a comment about the product"
                          floatingLabelStyle={{fontWeight: 'normal'}}
                          fullWidth
                          value={this.state.newComment}
                          onChange={this.onNewCommentChange}
                          onKeyDown={this.onNewCommentKeyPress}
                      />
                      <br/>
                  </div>
              </CardText>

              {sortedcomment.map((item, index) =>
                  <div>
                      <div className="usercommentname">
                          <h4><strong> <span className="dateincomment"> {item.Username}  {item.date} </span></strong> <br/></h4>
                      </div>
                      <div className="usercomments">
                          <p>
                              {item.Comment}
                          </p>
                      </div>
                      <hr/>
                  </div>
              )}

          </div>}
        </div>
      </div>

    return (renderContent);
  }
}

export default ProductContent;
