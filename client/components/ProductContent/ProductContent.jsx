import React, {Component} from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown';
import {productEditValidationDetails} from '../../action/action.jsx';

import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import Flexbox from 'flexbox-react';
import Cheerio from 'cheerio';
import Loading from 'react-loading';

var data = "Take me to [pookie](#pookie) \n <a name='Test Title1' level='title'></a><a name='Test Title1' level='subtitle'></a><a name='Test Title1' level='subtitle'></a> \n # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n ###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n  ## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag\n### <a name='Test Title2'></a>Some heading";

function mapStateToProps(store) {
  return {userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    productEditValidationDetails
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class ProductContent extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      preparingData: true,
      htmlData: null
    };
  }

  componentWillMount() {
    let anchorTags = Cheerio.load(data)('a');
    let list = [];
    for (let [index, anchorTag] of anchorTags.toArray().entries()) {
      if (anchorTag.attribs.level === 'title') {
        let title = {
          key: index,
          primaryText: anchorTag.attribs.name,
          href: `#${anchorTag.attribs.name}`
        };
        list.push(title);
      } else {
        let subtitle = {
          key: index,
          style: {backgroundColor: "#fff"},
          primaryText: anchorTag.attribs.name,
          href: `#${anchorTag.attribs.name}`
        };
        list.push(subtitle);
      }
    }

    let titleElems = [];
    for (let item of list) {
      titleElems.push(
        <MenuItem {...item} />
      );
    }

    this.setState({
      preparingData: false,
      htmlData: titleElems
    });
  }

  render() {
    let {preparingData, htmlData} = this.state;

    let renderContent = preparingData ? <Loading type='spin' color='#000000' /> :
      <div className="contentDownload">
        <div className="contentSidebar contentSidebarColor">
          <MenuItem primaryText="Author Info" className="contentSidebarColor" leftIcon={<RemoveRedEye />}/>
          <MenuItem primaryText="Ask Question" className="contentSidebarColor" leftIcon={<PersonAdd />}/>
          <MenuItem primaryText="Download" leftIcon={<Download />}/>
          <MenuItem primaryText="----"/>
          {htmlData}
        </div>

        <div className="contentMarkdown" style={{backgroundColor: "#fff"}}>
          <ReactMarkdown source={data} escapeHtml={false}/>
        </div>
      </div>

    return(renderContent);
  }
}

export default ProductContent;
