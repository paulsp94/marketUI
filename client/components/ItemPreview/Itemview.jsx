import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import ReactMarkdown from 'react-markdown';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class  Itemview extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            code:"color: blue",
	        expanded: false,
        };

    }

    render(){
        var divstylelastimage = {
            backgroundImage: "url('client/Images/lastimg.jpg')"
        }

        var buttonvalue = 'dssf';

        if(buttonvalue == ''){
            var button = '';
        }
        else {
            var button = <RaisedButton label="Preview" style={{ marginLeft: "44%", marginRight: "44%"}} />
        }

        var thisIsMyCopy = '### test\n# markdown\n\n <h5> <strong> copy copy copy </h5> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong>### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong> ### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong> ### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong> ### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong> ### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong> ### test \n <p> <strong> copy copy copy </strong> <br/> <strong> All the information user paste in Html code will come here </strong> <strong> So user can write anything to show viewers</strong>';

        return (
	    <MuiThemeProvider>
            <div>
                <div className="container">
			
		      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{backgroundColor: "#efeadd"}}>
		   
			<CardMedia
			  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
			  <img src="client/Images/lastimg.jpg" />
			</CardMedia>
            <Card style={{ marginRight: 40, marginLeft: 40}}>

				    {button}
			<CardText >
				  <div className="code">
				        <ReactMarkdown source={thisIsMyCopy} />
				    </div>
			</CardText>
		      </Card>
              </Card>
		
             

                </div>
            </div>
	    </MuiThemeProvider>
        )
    }
}

export default Itemview;
