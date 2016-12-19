import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from './Sidebar.jsx';
import DataContainer from './DataContainer.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Profile from './Profile.jsx';
import ProfileSidebar from './ProfileSidebar.jsx';
import Content from './Content.jsx';
import ContentSidebar from './ContentSidebar.jsx';
import { currentuserid, UserCreatedProduct, FetchAllCurrentUserproduct, UserDownloadedProduct } from '../../action/action.jsx';



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        currentuserid,
        UserCreatedProduct,
        FetchAllCurrentUserproduct,
        UserDownloadedProduct
    }, dispatch);
}

function mapStateToProps(store) {
    return { userdetails: store.userdetails };
}

@connect(mapStateToProps, mapDispatchToProps)

class  Downloads extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
            productname:'',
            profiletab:'',
            Contentdata:'',
            currentProduct:'',
            firstvalue:'',
            Productsidebarid:'',
        };
    }

    componentWillMount(){


        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
            firstvalue: "0"
        });


    }

    componentDidMount(){
        this.props.UserDownloadedProduct();
    }

    productData(productname){
        this.setState({
            firstvalue: "1",
            Productsidebarid: productname
        });
    }

    productData1(productname){

        for(var i=0; i<productspecificdata.length; i++){
            var productdata = [];
            var specific_data = productspecificdata[i];
            var currentproduct = productspecificdata[i].Productname;
            if(currentproduct == productname){

                var arr =[];
                for( var ij in specific_data ) {
                    if (specific_data.hasOwnProperty(ij)){
                        arr.push(specific_data[ij]);
                    }
                }

                this.setState({
                    productname : arr,
                });
                break;
            }
        }
    }

    Profile(){
        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
        });
    }

    Download(){

        this.props.FetchAllCurrentUserproduct();
        var profiletab = 0;
        this.setState({
            profiletab : profiletab,
        });
    }

    Content(){

        this.props.UserCreatedProduct();

        var profiletab = 2;
        this.setState({
            profiletab : profiletab,
        });
    }

    render(){

        //all Download section
        if(this.props.userdetails.userdownloadetails == false){
            var data = [];
            var currentProduct = '';
        }
        else {
            var data = this.props.userdetails.userdownloadetails.productalldeatils;
            var data = Object.keys(data).map(key => data[key]);

            // all sidebar details
            if(this.state.firstvalue == "0"){
                var currentProduct = data[0].productid;
            }
            else {
                var currentProduct = this.state.Productsidebarid;
            }

        }

        var productspecificdata = this.state.productname;
        var profiletab = this.state.profiletab;


        if(profiletab == '1'){
            var sidebar = <ProfileSidebar/>
        }
        else if(profiletab == '2'){
            var sidebar = <ContentSidebar/>
        }
        else {
            var sidebar = <Sidebar productid={currentProduct}/>
        }

        var Usercreatedproductobject = this.props.userdetails.UserCreatedProduct;

        if(Usercreatedproductobject == false) {
            var Contentdata = <div>
                <div className="loader">
                    <Loading type='spin' color='#000000' />
                </div>
            </div>
        }

        else {
            var Usercreatedproductarray = Object.keys(Usercreatedproductobject).map(key => Usercreatedproductobject[key]);

            var Usercreatedproduct = [].concat.apply([], Usercreatedproductarray);


            var Contentdata =
                <div>
                {
                    Usercreatedproduct.map((detail)=> {
                        return <Content item={detail} ViewItemrateprice = {this.productData.bind(this)}/>
                    })
                }
                </div>;
        }

        return (
            <div className="background">
                        <div className="container">
                        <Card style= {{backgroundColor: "#efeadd", paddingBottom: "2%"}}>
                            <Tabs>
                                <Tab label="Account" onActive={this.Profile.bind(this)}>
                                    <div>
                                       <Profile/>
                                    </div>
                                </Tab>
                                <Tab label="Downloads" onActive={this.Download.bind(this)}>
                                    <div>
                                        {
                                            data.map((detail)=> {
                                                return <DataContainer item={detail} ViewItem = {this.productData.bind(this)}/>
                                            })
                                        }
                                    </div>
                                </Tab>

                                <Tab label="Content" onActive={this.Content.bind(this)}>
                                    <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}}>

                                    </Card>
                                    {Contentdata}
                                </Tab>
                            </Tabs>
                            </Card>
                        </div>
                {sidebar}
            </div>
        )
    }
}

export default Downloads;



