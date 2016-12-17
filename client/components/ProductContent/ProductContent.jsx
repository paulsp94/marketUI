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

var data = "Take me to [pookie](#pookie) \n <a name='Test Title1'></a> \n # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n ###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n  ## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag\n### <a name='Test Title2'></a>Some heading";

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
    this.state = {};
  }

  createLists() {
    let anchorTags = Cheerio.load(data)('a');
    let list = [];
    anchorTags.map((index, anchorTag) => {
      list.push(
        <MenuItem key={index}
                  primaryText={anchorTag.attribs.name}
                  href={`#${anchorTag.attribs.name}`}/>);
    });
    return list;
  }

  render() {
    return (
      <div className="contentDownload">
        <div className="contentSidebar contentSidebarColor">
          <MenuItem primaryText="Author Info" className="contentSidebarColor" leftIcon={<RemoveRedEye />}/>
          <MenuItem primaryText="Ask Question" className="contentSidebarColor" leftIcon={<PersonAdd />}/>
          <MenuItem primaryText="Download" leftIcon={<Download />}/>
          <MenuItem primaryText="----"/>
          {this.createLists()}
        </div>

        <div className="contentMarkdown" style={{backgroundColor: "#fff"}}>
          <ReactMarkdown source={data} escapeHtml={false}/>
        </div>
      </div>
    )
  }
}

export default ProductContent;
