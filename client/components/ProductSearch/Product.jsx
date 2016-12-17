import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Flexbox from 'flexbox-react';
import { productCoreDetails, currentproductstore, } from '../../action/action.jsx'


function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        productCoreDetails,
        currentproductstore,
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)


class Product extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    productDetails(){
        var productid = this.props.item.productid;
        browserHistory.push('ItemPreview/'+ productid);
    }

    render(){

        return (
            <div className="productdetails" onClick={this.productDetails.bind(this)}>
                <Card className="product-search" style={{padding: 0}}>
                    <img className="product_image" src={this.props.item.Subimage}/>
                    <h5>{this.props.item.Title}</h5>
                    <h5> {this.props.item.Description} </h5>
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1}>
                            <RaisedButton label="4.8" style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            <RaisedButton label={this.props.item.Price} style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            <RaisedButton label="223" style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                    </Flexbox>
                </Card>
            </div>
        )
    }
}

export default Product;



