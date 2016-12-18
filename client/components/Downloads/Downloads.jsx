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
import { currentuserid, UserCreatedProduct, FetchAllCurrentUserproduct } from '../../action/action.jsx';


var datacontainer = [
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" }
];

var data1 = [
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1",rate:"4.5/10" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2",rate:"8.5/10" },
];

var productspecificdata = [
    {Productname:"Product 1", IntegrationTime:"7-8 Hours", Complexity: "8/10", compatibilty:" Php7", Price:"$15",rate:"5/10" },
    {Productname:"Product 2", IntegrationTime:"1-2 Hours", Complexity: "3.5/10", compatibilty:"Java", Price:"$250",rate:"7.5/10"},
    {Productname:"Product 3", IntegrationTime:"3-4 Hours", Complexity: "7.5/10", compatibilty:"C++", Price:"$20",rate:"2.5/10"},
];

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        currentuserid,
        UserCreatedProduct,
        FetchAllCurrentUserproduct,
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
        };
    }

    componentWillMount(){
        var specific_data = productspecificdata[0];
        var arr =[];
        for( var ij in specific_data ) {
            if (specific_data.hasOwnProperty(ij)){
                arr.push(specific_data[ij]);
            }
        }

        this.setState({
            productname : arr,
        });

        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
        });

    }

    productData(productname){

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

        //console.log(this.props.userdetails.currentuserproducts);

        // download section will changed soon
        if(this.props.userdetails.currentuserproducts == false){
            var data = [];
        }
        else {
            var data = this.props.userdetails.currentuserproducts.products;
            var data = Object.keys(data).map(key => data[key]);
        }

        var productspecificdata = this.state.productname;
        var profiletab = this.state.profiletab;
        if(profiletab == '1'){
            var sidebar = <ProfileSidebar/>
        }
        else if(profiletab == '2'){
            var sidebar = <ContentSidebar productname={productspecificdata}/>
        }
        else {
            var sidebar = <Sidebar productname={productspecificdata}/>
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



