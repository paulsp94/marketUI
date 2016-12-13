import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';


var Welcome = React.createClass({ 


    render(){
        var style = { backgroundImage: 'url(https://picload.org/image/raorapid/front_page.jpg)', 
                      height: '100%', 
                      width: '100%', 
                      top: '0px',
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'right top', 
                      backgroundSize: 'cover',
                      position: 'absolute'};

        return (
            <div>
                <div style={style}>
                    <div className="welcome-text">
                        <h1> Welcome to the Rscript.Market</h1>
                        <br/>
                        <p> Discover the newest code snippets of the R universe </p>
                        <p> We are now available in 25 countries! </p>
                    </div>
                    <div className="welcome-text" style={{marginTop:'40px'}}>
                        <RaisedButton href="/ProductSearch" label='explore' style={{marginRight: '5px'}} /> 
                    </div>
                    <div className='welcome-info'>
                        <p> this density map was  <br/> created with R and C4D</p>
                    </div>
                </div>
                
            </div>
        )
    }

});

module.exports = Welcome;


