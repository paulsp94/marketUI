import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
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
                    <Card style={{marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                        <div className="product-tab" >

                          <div className="left-panel">
                              <div style={{marginTop: 25}}>

                                <p> this is the creation page! here you can interactivly create your content. Dont forget to save & publish your work </p>

                                </div>
                                <div className="productdisplayleft">
                                <Card style={{padding: 20, backgroundColor: "white"}}>
                                          <input name="title" ref={(a) => this.title = a} type="text" className="inputfield-signup1" placeholder="Title" onChange={this.TiTle.bind(this)}/>
                                          <input name="subtitle" ref={(c) => this.subTitle = c} type="text" className="inputfield-signup1" placeholder="sub-title" onChange={this.SubTitle.bind(this)}/><br/><br/>
                                          <br/><br/>
                                          <RaisedButton label="Upload Image" style={{ margin: 12}} /> <br/>
                                          <RaisedButton label="Upload main-Image" style={{ margin: 12}} /><br/><br/>

                                          <select name="Category" ref={(ab) => this.Category = ab} className="inputfield-signup1" onChange={this.ProdctCategory.bind(this)}>
                                              <optgroup label="Category">
                                              <option value="Category">  Category </option>
                                                  <option value="Category">  Category </option>
                                                  <option value="Category1" > Category1 </option>
                                                  <option value="Category7">  Category7 </option>
                                                  <option value="Category2">  Category2 </option>
                                                  <option value="Category3">  Category3 </option>
                                                  <option value="Category4">  Category4 </option>
                                              </optgroup>
                                          </select>

                                          <textarea name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product" onChange={this.DescriPtion.bind(this)}/> <br/> <br/>
                                          <input name="Price" ref={(ef) => this.Price = ef}  type="text" className="inputfield-signup1"
                                          placeholder="Price in $"
                                          onChange={this.PriCe.bind(this)}/><br/><br/>
                              </Card>
                              </div>
                          </div>

                          <div className="right-panel">

                              <div className="container2">
                                      <CardMedia
                                          overlay={<CardTitle title={this.state.title} subtitle={this.state.subtitle}/>}>
                                          <img style ={{height: 400}} src="client/Images/lastimg.jpg" />
                                      </CardMedia>
                                      </div>
                                 
                                  <div className="itemCard">
                                    <Card>
                                      <CardMedia>
                                          <img className="productimage1" src=""/>
                                      </CardMedia>
                                      <div className="innerItemCard">
                                              <h3> <strong> {this.state.title}  </strong> </h3>
                                              <br/>
                                              <h5> {this.state.describtion}</h5>
                                              <RaisedButton label={this.state.price} style={{ margin: 3}} />
                                              <RaisedButton label={this.state.category} style={{ margin: 3}} />
                                              <RaisedButton label="rating" style={{ margin: 3}} />
                                      </div>
                                    </Card>
                                      <br/><br/>
                                  </div>
                              </div>
                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default GeneralProfile;



