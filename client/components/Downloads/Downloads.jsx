import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import ProductContent from '../ProductContent/ProductContent.jsx';
import Sidebar from './Sidebar.jsx';
import DataContainer from './DataContainer.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Profile from './Profile.jsx';
import ProfileSidebar from './ProfileSidebar.jsx';


var data = [
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" }
];

var productspecificdata = [
    {Productname:"Product 1", IntegrationTime:"7-8 Hours", Complexity: "8/10", compatibilty:" Php7"},
    {Productname:"Product 2", IntegrationTime:"1-2 Hours", Complexity: "3.5/10", compatibilty:"Java"},
    {Productname:"Product 3", IntegrationTime:"3-4 Hours", Complexity: "7.5/10", compatibilty:"C++"},
];

class  Downloads extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
            productname:'',
            profiletab:'',
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

    Profile(){
        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
        });
    }

    Download(){
        var profiletab = 0;
        this.setState({
            profiletab : profiletab,
        });
    }

    Content(){
        var profiletab = 0;
        this.setState({
            profiletab : profiletab,
        });
    }



    render(){

        var productspecificdata = this.state.productname;

        var profiletab = this.state.profiletab;

        if(profiletab == '1'){
            var sidebar = <ProfileSidebar/>
        }
        else {
            var sidebar = <Sidebar productname={productspecificdata}/>
        }

        return (
            <MuiThemeProvider>
            <div className="background">
                <Header/>
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
                                                return <DataContainer item={detail}
                                                                  ViewItem = {this.productData.bind(this)}
                                                />
                                            })
                                        }
                                    </div>
                                </Tab>
                                     <Tab label="Content" onActive={this.Content.bind(this)}>
                                </Tab>
                            </Tabs>
                            </Card>
                        </div>
                {sidebar}
            </div>
            </MuiThemeProvider>
        )
    }
}

export default Downloads;



