import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown';
import { productEditValidationDetails } from '../../action/action.jsx';

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
<meta name="viewport" content="width=device-width" />

var data = "Take me to [pookie](#pookie) \n <a name='pookie2'></a> \n # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n ###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n  ## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n\n# This is an <h2> tag\n###### This is an <h6> tag # This is an <h1> tag\n## This is an <h2> tag\n###### This is an <h6> tag\n### <a name='pookie'></a>Some heading";

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        productEditValidationDetails
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)


class  ProductContent extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    componentWillMount(){
    }

    render(){

        var thisIsMyCopy = data;
        return (
            <div className="contentDownload">
             <div className="contentSidebar contentSidebarColor">
                <MenuItem primaryText="Author Info" className="contentSidebarColor" leftIcon={<RemoveRedEye />} />
                <MenuItem primaryText="Ask Question" className="contentSidebarColor" leftIcon={<PersonAdd />} />
                <MenuItem primaryText="Download" leftIcon={<Download />} />
                <MenuItem primaryText="----" />
                <MenuItem primaryText="Header Title1" href="#pookie"/>
                <MenuItem primaryText="Header Title2" href="#pookie2"/>
                <MenuItem primaryText="Header Title3"/>
                <MenuItem primaryText="Header Title4"/>
            </div>
             
                <div className="contentMarkdown" style={{backgroundColor: "#fff"}}>
                    <ReactMarkdown source={thisIsMyCopy} escapeHtml={false} />
                </div>
            </div>
        )
    }
}

export default ProductContent;