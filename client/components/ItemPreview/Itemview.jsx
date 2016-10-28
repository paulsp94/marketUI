import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import ReactMarkdown from 'react-markdown';

class  Itemview extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            code:"color: blue"
        };

    }


    render(){

        var divStyle = {
            backgroundImage: "url('client/Images/zx.jpg')"
        };

        var buttonvalue = 'dssf';

        if(buttonvalue == ''){
            var button = '';
        }
        else {
            var button = <button className="submitbutton"> Live Preview <img src ={'client/Images/preview.png'}/> </button>
        }

        var thisIsMyCopy = ' <p> copy copy copy <strong> All the information user want to </strong>';


        return (
            <div>

                <div className="container">

                <div className="imagecontainer">
                    <div className="image-user" style={divStyle}>
                    </div>
                </div>
                    {button}
                <div className="description">
                    Lorem ipsum eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                </div>

                    <div className="code">
                        <ReactMarkdown source={thisIsMyCopy} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Itemview;