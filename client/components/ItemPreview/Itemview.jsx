import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazyload';

export default class Itemview extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      code: "color: blue",
      expanded: false,
    };
  }

  render () {

    var buttonvalue = 'dssf';

    if (buttonvalue == '') {
      var button = '';
    }
    else {
      var button = <RaisedButton label="Preview" style={{ marginLeft: "44%", marginRight: "44%" }}/>
    }

    var thisIsMyCopy = this.props.Description.Description;

    return (
      <div>

        <div className="container">

          <Card style={{ backgroundColor: "#efeadd" }}>
            <LazyLoad height={'100%'} resize={true} >
            <CardMedia
              overlay={
                <CardTitle title={this.props.productcoredetails.Title} subtitle={this.props.productcoredetails.SubTitle}/>}>
                <img src={this.props.productcoredetails.Mainimage}/>
            </CardMedia>
              </LazyLoad>
            <Card style={{ marginRight: 40, marginLeft: 40 }}>
              {button}
              <CardText >
                <div className="code">
                  <ReactMarkdown source={thisIsMyCopy}/>
                </div>
              </CardText>
            </Card>
          </Card>
        </div>
      </div>
    )
  }
}
