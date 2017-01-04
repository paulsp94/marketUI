import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Flexbox from 'flexbox-react';
import { productCoreDetails, currentproductstore, } from '../../action/action.jsx'
import LazyLoad from 'react-lazyload';
import StarRatingComponent from 'react-star-rating-component';

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
                <Card className="product-search" style={{padding: 0, backgroundColor:'eceff1'}} >
                    <LazyLoad height={'150px'} resize={true} offset={[200,200]} >
                        <img className="product_image" src={this.props.item.Subimage}/>
                    </LazyLoad>
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1}>
                            {/*<RaisedButton label={this.props.item.Price} style={{ margin: 1, width: "100%"}} />*/}
                            <RaisedButton label="free" style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                        <Flexbox flexGrow={1} marginTop={'10px'} marginLeft={'13px'}>
                            <StarRatingComponent
                                name="rating" /* name of the radio input, it is required */
                                value={this.props.item.rating || 0} /* number of selected icon (`0` - none, `1` - first) */
                                editing={false}
                            />
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            <RaisedButton label={`${this.props.item.downloadCount || 0}`}
                                          style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                    </Flexbox>
                    <h5><b>{this.props.item.Title}</b></h5>
                    <h5 style={{height: '40px', paddingBottom: '3px'}}> {this.props.item.Description} </h5>
                    
                </Card>
            </div>
        )
    }
}

export default Product;



