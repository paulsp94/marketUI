import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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

    var thisIsMyCopy = this.props.Description ? this.props.Description.Description : null;

    return (
      <div>

        <div className="container">

          <Card style={{ backgroundColor: "#efeadd" }}>
            <CardMedia
              overlay={
                <CardTitle title={this.props.productcoredetails.Title} subtitle={this.props.productcoredetails.SubTitle}/>}>
                <img className="itemLargeImage" src={this.props.productcoredetails.Mainimage}/>
            </CardMedia>
            <Card className="itemPreviewMargins">
              <CardText >
                <div className="code">
                  {
                    thisIsMyCopy ? <ReactMarkdown source={thisIsMyCopy}/> : null
                  }
                </div>
              </CardText>
            </Card>
          </Card>
        </div>
      </div>
    )
  }
}
