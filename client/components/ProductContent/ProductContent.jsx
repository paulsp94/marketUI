import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import { productEditValidationDetails } from '../../action/action.jsx';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
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
    productEditValidationDetails
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
              Username: snapshot .val().Username,
          });

          this.setState({
              allcomments
          });

      });

      this.setState({
          ProductId: ProductId,
          allcomments:allcomments,
      });

  }

  render () {

    let { preparingData, htmlData, authorProfile, comments, contentData } = this.state;

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
            <h1>Author Profile</h1>
          </div>}
          {comments && 
          <div>
              {this.state.allcomments.map((item, index) =>
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

          </div>}
        </div>
      </div>

    return (renderContent);
  }
}

export default ProductContent;
