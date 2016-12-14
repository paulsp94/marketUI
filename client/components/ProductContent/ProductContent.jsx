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
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';
import { productEditValidationDetails } from '../../action/action.jsx';

var data = "<h1>dscdscashdiashdiasidiasdiiasd</h1>  <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3> <h3>Added stripe button in the profile page #3</h3>";

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
            <div className="">
                <div className="Productcontent" style={{backgroundColor: "#efeadd", paddingBottom: "0.5%"}}>
                    <ReactMarkdown source={thisIsMyCopy} escapeHtml={false} />
                </div>
            </div>
        )
    }
}

export default ProductContent;