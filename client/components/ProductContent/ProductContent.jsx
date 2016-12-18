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

const cx = classNames.bind(styles)

var data = "Take me to [pookie](#pookie) \n <a name='Test Title1' level='title'></a><a name='Test Title1' level='subtitle'></a><a name='Test Title1' level='subtitle'></a> \n # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n ###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n  ## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag\n### <a name='Test Title2'></a>Some heading";

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
      comments: false
    };
  }

  componentWillMount () {
    let anchorTags = Cheerio.load(data)('a');
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
      htmlData: list
    });
  }

  render () {
    let { preparingData, htmlData, authorProfile, comments, contentData } = this.state;

    let renderContent = preparingData ? <Loading type='spin' color='#000000'/> :
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
          <MenuItem primaryText="Download" leftIcon={<Download />}/>
          <MenuItem primaryText="----"/>
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
          {contentData && <ReactMarkdown source={data} escapeHtml={false}/>}
          {authorProfile &&
          <div>
            <h1>Author Profile</h1>
          </div>}
          {comments &&
          <div>
            <h1>Comments</h1>
          </div>}
        </div>
      </div>

    return (renderContent);
  }
}

export default ProductContent;
