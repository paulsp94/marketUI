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
         Productid:'',
        Description:'',
        tags:[],
        email:'',
        newComment: ''
    };
  }

  componentWillMount () {

      var  Productid = this.props.params.productid;

      firebase.database().ref('Content').orderByChild(' Productid').equalTo( Productid).on("child_added", (snapshot) => {

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

      var  Productid = this.props.params.productid;

      var allcomments = [];
      firebase.database().ref('Products_User_Comments/'+ Productid).on("child_added", (snapshot) => {

          allcomments.push({
              productid: snapshot.val(). Productid,
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
           Productid:  Productid,
          allcomments:allcomments,
      });

      firebase.database().ref('Product_creation/'+  Productid).once("value", (snapshot) => {

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
            var  Productid = this.props.params.productid;
            const user = firebase.auth().currentUser;
            this.props.EnternewComment(newComment,  Productid, user.email);
            this.setState({newComment: ''});
        }
    };

  render () {

        var user = firebase.auth().currentUser;

        var commentsAuthToggle = user ? 
            <TextField
                floatingLabelText="Leave a comment"
                floatingLabelStyle={{fontWeight: 'normal'}}
                fullWidth
                disabled={false}
                value={this.state.newComment}
                onChange={this.onNewCommentChange}
                onKeyDown={this.onNewCommentKeyPress}
            /> : 
            <TextField
                floatingLabelText="Login first"
                floatingLabelStyle={{fontWeight: 'normal'}}
                fullWidth
                disabled={true}
                value={this.state.newComment}
                onChange={this.onNewCommentChange}
                onKeyDown={this.onNewCommentKeyPress}
            /> ; 

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
                    authorProfile: false,
                    comments: false,
                    contentData: true
                })}
                primaryText="Content"
                className="contentSidebarColor" leftIcon={<PersonAdd />}
            />
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

          {contentData && <ReactMarkdown source={this.state.Content} escapeHtml={false}/>}
          {authorProfile &&
          <div>
              <div>
                  <div className="sidebar-bottom">
                      <CardText>
                          <br />
                          <div className="userdescribation">
                              <strong>Contact Email: </strong>{this.state.email}
                          </div>
                          <div className="userdescribation">
                              {this.state.Description}
                          </div>
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

              <div className="sidebar-bottom">
              <CardText>
                  <div className="usercommentname">
                     {commentsAuthToggle}
                      <br/>
                  </div>
              </CardText>

              {sortedcomment.map((item, index) =>
                  <div key={index} className="productcomments">
                      <div className="usercommentname">
                          <h4><strong> <span className="dateincomment"> {item.Username}  {item.date} </span></strong> <br/></h4>
                      </div>
                      <div className="usercomments">
                          <p> {item.Comment} </p>
                      </div>
                  </div>
              )}

              </div>
          </div>}
        </div>
      </div>

    return (renderContent);
  }
}

export default ProductContent;