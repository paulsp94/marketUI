import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import ProductContent from '../ProductContent/ProductContent.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Tab as MuiTab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class  GeneralProfile extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            title:"Title",
            subtitle:"Sub-Tittle",
            describtion:"Description",
            price:"Price",
            category:'Category',

        };

    }



    TiTle(){
        var title = this.title.value;
        this.setState({
            title :title
        });
    }

    SubTitle(){
        var subtitle = this.subTitle.value;
        this.setState({
            subtitle :subtitle
        });
    }

    DescriPtion(){
        var describtion = this.textarea.value;
        console.log(describtion);
        this.setState({
            describtion :describtion
        });
    }

    PriCe(){

        var price =  this.Price.value;
        this.setState({
            price : price
        });

    }

    ProdctCategory(){

        var category = this.Category.value;
        this.setState({
            category :category
        });

    }

    render(){

        var style = {
            height : "300px",
        };


        return (
            <MuiThemeProvider>
                <div className="Profiledata">
                    <Card style={{marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                        <div className="Product2" >

                          <div className="Leftedit">

                              <div className="Productdisplay" >
                                  <CardText>
                                      <div className="productdisplayleft">
                                          <input name="title" ref={(a) => this.title = a} type="text" className="inputfield-signup1" placeholder="Tittle" onChange={this.TiTle.bind(this)}/><br/><br/>
                                          <RaisedButton label="Upload Image" style={{ margin: 12}} /> <br/>
                                          <RaisedButton label="Upload main-Image" style={{ margin: 12}} /><br/><br/>

                                          <select name="Category" ref={(ab) => this.Category = ab} className="inputfield-signup1" onChange={this.ProdctCategory.bind(this)}>
                                              <optgroup label="Category">
                                              <option value="Product Category"> Product Category </option>
                                                  <option value="Product Category"> Product Category </option>
                                                  <option value="Product Category1" > Product Category1 </option>
                                                  <option value="Product Category7"> Product Category7 </option>
                                                  <option value="Product Category2"> Product Category2 </option>
                                                  <option value="Product Category3"> Product Category3 </option>
                                                  <option value="Product Category4"> Product Category4 </option>
                                              </optgroup>
                                          </select>
                                      </div>
                                      <div className="productdisplayright">

                                          <input name="subtitle" ref={(c) => this.subTitle = c} type="text" className="inputfield-signup1" placeholder="Sub-Tittle" onChange={this.SubTitle.bind(this)}/><br/><br/>
                                          <textarea name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product" onChange={this.DescriPtion.bind(this)}/> <br/> <br/>
                                          <input name="Price" ref={(ef) => this.Price = ef}  type="text" className="inputfield-signup1" onChange={this.PriCe.bind(this)}/><br/><br/>

                                      </div>
                                  </CardText>
                              </div>
                          </div>

                          <div className="RightView">

                              <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                                  <div className="Product" >
                                      <CardText>
                                          <img className="productimage1" src=""/>
                                          <div className="text-part1">
                                              <h3> <strong> {this.state.title}  </strong> </h3>
                                              <br/> <br/>
                                              <h5> {this.state.describtion}</h5>
                                              <RaisedButton label={this.state.price} style={{ margin: 12}} />
                                              <RaisedButton label={this.state.category} style={{ margin: 12}} />

                                          </div>
                                      </CardText>

                                      <br/><br/>

                                      <CardMedia
                                          overlay={<CardTitle title={this.state.title} subtitle={this.state.subtitle}/>}>
                                          <img style ={style} src="client/Images/lastimg.jpg" />
                                      </CardMedia>
                                  </div>
                              </Card>

                          </div>

                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default GeneralProfile;



