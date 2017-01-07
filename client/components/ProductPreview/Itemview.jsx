import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import cn from 'classnames';

export default class Itemview extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      code: "color: blue",
      expanded: false,
    };
  }

  isImageCached = (src) => {
    var image = new Image();
    image.src = src;
    return image.complete;
  };

  render () {
    const { productcoredetails: { Title, SubTitle, Mainimage }, Description } = this.props;
    var button = <RaisedButton label="Preview" style={{ marginLeft: "44%", marginRight: "44%" }}/>  

    var thisIsMyCopy = Description ? Description.Description : null;

    return (
      <div className="item-view">
        <div className="container">
          <Card style={{ backgroundColor: "#efeadd" }}>
            <CardMedia
              overlay={
                <CardTitle title={Title} subtitle={SubTitle}/>}>
                <img src={Mainimage}
                  className={cn('itemLargeImage', {
                   'fadeIn': !this.isImageCached(Mainimage)
                  })}
                />
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
