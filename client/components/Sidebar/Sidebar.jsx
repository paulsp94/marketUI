import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';





class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            Currenticon:'',
            Currentstate:'',
	    expanded: false,
	    showCheckboxes: false,
        };
    }



    componentWillMount(){


        var curr_icon =  <div><div className="sidebar-bottom">

            <h4><strong> Product1 </strong> <br/></h4>

            <h4><strong> Estimated Integration Time </strong> <br/></h4>
            <p> 7-8 Hours</p>
            <br/>

            <h4><strong> Complexity </strong> <br/></h4>
            <p> 6.5/10 </p>
            <br/>
            <h4><strong> Required Packages </strong> <br/></h4>


            <RaisedButton label="Npm" disabled={true} className="submitbutton4" />
            <RaisedButton label="Bla-Bla" disabled={true} className="submitbutton4" />
            <RaisedButton label="something Here" disabled={true} className="submitbutton4" />
            <RaisedButton label="Npm" disabled={true} className="submitbutton4" />

            <br/>
            <br/>
            <h4><strong> Language Compatibilty </strong> <br/></h4>

            R.1/R.5

            <br/> <br/>
            <h4><strong> Maintenance </strong> <br/></h4>
            <h5> 5 Versions</h5>
            <p> Last Updated 20-11-2015 </p>

            <br/>
            <h4><strong> Tags </strong> <br/></h4>

            <RaisedButton label="React" disabled={true} className="submitbutton4" />
            <RaisedButton label="Html" disabled={true} className="submitbutton4" />
            <RaisedButton label="CSS" disabled={true} className="submitbutton4" />
            <RaisedButton label="Javascript" disabled={true} className="submitbutton4" />
            <RaisedButton label="Jquery" disabled={true} className="submitbutton4" />

        </div>
        </div>;

        this.setState({
            Currenticon :curr_icon
        });

        var statevalue = 0;
        this.setState({
            Currentstate : statevalue
        });

    }

    Item(){

        var curr_icon =  <div> <div className="sidebar-bottom">

            <h4><strong> Product1 </strong> <br/></h4>

            <h4><strong> Estimated Integration Time </strong> <br/></h4>
            <p> 7-8 Hours</p>
            <br/>

            <h4><strong> Complexity </strong> <br/></h4>
            <p> 6.5/10 </p>
            <br/>
            <h4><strong> Required Packages </strong> <br/></h4>


            <RaisedButton label="Npm" disabled={true} className="submitbutton4" />
            <RaisedButton label="Bla-Bla" disabled={true} className="submitbutton4" />
            <RaisedButton label="something Here" disabled={true} className="submitbutton4" />
            <RaisedButton label="Npm" disabled={true} className="submitbutton4" />

            <br/>
            <br/>
            <h4><strong> Language Compatibilty </strong> <br/></h4>

            R.1/R.5

            <br/> <br/>
            <h4><strong> Maintenance </strong> <br/></h4>
            <h5> 5 Versions</h5>
            <p> Last Updated 20-11-2015 </p>

            <br/>
            <h4><strong> Tags </strong> <br/></h4>

            <RaisedButton label="React" disabled={true} className="submitbutton4" />
            <RaisedButton label="Html" disabled={true} className="submitbutton4" />
            <RaisedButton label="CSS" disabled={true} className="submitbutton4" />
            <RaisedButton label="Javascript" disabled={true} className="submitbutton4" />
            <RaisedButton label="Jquery" disabled={true} className="submitbutton4" />

        </div>
        </div>;

        this.setState({
            Currenticon :curr_icon
        });

        var statevalue = 0;
        this.setState({
            Currentstate : statevalue
        });

    }

    Comments(){

        var curr_icon = <div><div className="sidebar-bottom">
            <CardText>
                <div className="usercommentname">
                    <h4> <strong> Komaldeep Singh </strong> <br/> </h4>
                </div>
                <div className="usercomments">
                    <p>
                        Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu
                    </p>
                </div>
                <hr/>

                <hr/>
                <div className="usercommentname">
                    <h4> <strong> Sonam Malhotra </strong> <br/> </h4>
                </div>
                <div className="usercomments">
                    <p>
                        Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)
                    </p>
                </div>
                <hr/>

                <hr/>
                <div className="usercommentname">
                    <h4> <strong> Sonam </strong> <br/> </h4>
                </div>
                <div className="usercomments">
                    <p>
                        Can you guide me ? How to improve the performance of this
                    </p>
                </div>
                <hr/>

                <hr/>
                <div className="usercommentname">
                    <h4> <strong> Sonam </strong> <br/> </h4>
                </div>
                <div className="usercomments">
                    <p>
                        Can you guide me ? How to improve the performance of this
                    </p>
                </div>
                <hr/>

            </CardText>
        </div>
        </div>;


        this.setState({
            Currenticon :curr_icon
        });

        var statevalue = 1;
        this.setState({
            Currentstate : statevalue
        });
    }

    Support(){

        var curr_icon =  <div> <hr/> <div className="sidebar-bottom">
            <img className="Userimage" src ={'client/Images/deep.jpg'}/> <br/>
            <CardText>
                <div className="userdescribation">
                    <p>
                        I have successful Web Developer with Nearly 2 Year experience.

                        Currently working as freelancer/contract Front hand Developer in Germany.

                        My Core Expertise is

                        React.js, Flux, Fetch Api and Redux
                        Web designing ( Html, css3, JavaScript and jQuery )
                        Backhand development (Php Laravel framework, MySQL, Firebase)
                    </p>
                    <hr/>
                    <strong>Email-</strong> komaldeep1993@gmail.com<br/>
                    <h4> <strong> Experience </strong> <br/> </h4>

                    <RaisedButton label="React" disabled={true} className="submitbutton4" />
                    <RaisedButton label="Html" disabled={true} className="submitbutton4" />
                    <RaisedButton label="CSS" disabled={true} className="submitbutton4" />
                    <RaisedButton label="Javascript" disabled={true} className="submitbutton4" />
                    <RaisedButton label="Jquery" disabled={true} className="submitbutton4" />
                    <RaisedButton label="Firebase" disabled={true} className="submitbutton4" />

                </div>
            </CardText>
        </div>
        </div>;

        this.setState({
            Currenticon :curr_icon
        });

        var statevalue = 1;
        this.setState({
            Currentstate : statevalue
        });


    }

    render(){

        var currentstate = this.state.Currentstate;
	
        if(currentstate == '0'){
          var subheader =   <div><div className="rating">
	    <Divider />
              <Table >
	    <TableBody displayRowCheckbox={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
	      <TableRow  >
		<TableRowColumn style={{textAlign: 'center'}}>Rating: 4.5</TableRowColumn>
		<TableRowColumn style={{textAlign: 'center'}}>$10</TableRowColumn>
		<TableRowColumn style={{textAlign: 'center'}}>Sold: 310</TableRowColumn>
	      </TableRow>
	    </TableBody>
	           </Table>
	  <RaisedButton label="Add To Card" style={{ margin: 12}} />
	  <RaisedButton label="Buy & Checkout" style={{ margin: 12}} />
	  <Divider />
            </div></div>
        }
        else {
            var subheader= '';
        }


        return (
	<MuiThemeProvider>	   
            <div className="sidebar">
 		<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

            <Tabs>
                <Tab label="Item" onActive={this.Item.bind(this)}> </Tab>
                <Tab label="Comments" onActive={this.Comments.bind(this)}> </Tab>
                <Tab label="Supports" onActive={this.Support.bind(this)}> </Tab>
            </Tabs>

                {subheader}
                {this.state.Currenticon}
		</Card>
            </div>

	</MuiThemeProvider>
        )
    }
}


export default Sidebar ;



