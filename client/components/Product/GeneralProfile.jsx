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



    Title(){
        var title = this.title.value;
        this.setState({
            title :title
        });
    }

    subTitle(){
        var subtitle = this.subTitle.value;
        this.setState({
            subtitle :subtitle
        });
    }

    Description(){
        var describtion = this.textarea.value;
        this.setState({
            describtion :describtion
        });
    }

    Price(){
        var price =  this.Price.value;
        this.setState({
            price :price
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
                                          <input name="title" ref={(a) => this.title = a} type="text" className="inputfield-signup1" placeholder="Tittle" onChange={this.Title.bind(this)}/><br/><br/>
                                          <RaisedButton label="Upload Image" style={{ margin: 12}} /> <br/>
                                          <RaisedButton label="Upload main-Image" style={{ margin: 12}} /><br/><br/>

                                          <select name="Category" ref={(ab) => this.Category = ab} className="inputfield-signup1" onChange={this.ProdctCategory.bind(this)}>
                                              <optgroup label="Category">
                                              <option> Product Category </option>
                                                  <option> Product Category </option>
                                                  <option> Product Category1 </option>
                                                  <option> Product Category7 </option>
                                                  <option> Product Category2 </option>
                                                  <option> Product Category3 </option>
                                                  <option> Product Category4 </option>
                                              </optgroup>
                                          </select>
                                      </div>
                                      <div className="productdisplayright">

                                          <input name="subtitle" ref={(c) => this.subTitle = c} type="text" className="inputfield-signup1" placeholder="Sub-Tittle" onChange={this.subTitle.bind(this)}/><br/><br/>
                                          <textarea name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product" onChange={this.Description.bind(this)}> </textarea> <br/> <br/>
                                          <input name="Price" ref={(e) => this.Price = e}  type="text" className="inputfield-signup1" placeholder="Price" onChange={this.Price.bind(this)}/><br/><br/>

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
                                              <h5> Description</h5>
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



