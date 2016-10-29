import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';

class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            Currenticon:''
        };

    }


    Item(){

        var curr_icon =  <div> <hr/> <div className="sidebar-bottom">
            <h4> <strong> Required Packages </strong> <br/> </h4>

            <button className="submitbutton4"> Npm </button>
            <button className="submitbutton4"> Bla-Bla </button>
            <button className="submitbutton4"> something Here </button>

            <br/>
            <h4> <strong> Language Compatibilty </strong> <br/> </h4>

            R.3.3.1 Or Higher <br/>
            rR3.30 Or Higher

            <br/> <br/>
            <h4> <strong> Maintenance </strong> <br/> </h4>
            <h5> 5 Versions</h5>
            <p> Last Updated   20-11-2015 </p>

            <br/>
            <h4> <strong> Tags </strong> <br/> </h4>

            <button className="submitbutton4"> React </button>
            <button className="submitbutton4"> Html </button>
            <button className="submitbutton4"> CSS </button>
            <button className="submitbutton4"> Javascript </button>
            <button className="submitbutton4"> Jquery </button>


        </div>
        </div>;

        this.setState({
            Currenticon :curr_icon
        });



    }

    Comments(){

        var curr_icon = <div> <hr/> <div className="sidebar-bottom">

            <img className="Userimagecomment" src ={'client/Images/deep.jpg'}/>

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
            <img className="Userimagecomment" src ={'client/Images/sonam.jpg'}/>
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
            <img className="Userimagecomment" src ={'client/Images/sonam1.jpg'}/>
            <div className="usercommentname">
                <h4> <strong> Sonam </strong> <br/> </h4>
            </div>
            <div className="usercomments">
                <p>
                    Can you guide me ? How to improve the performance of this
                </p>
            </div>
            <hr/>

        </div>
        </div>;


        this.setState({
            Currenticon :curr_icon
        });

    }

    Rating(){
        var curr_icon = <div> <hr/> <div className="sidebar-bottom">

            <img className="Userimagecomment" src ={'client/Images/deep.jpg'}/>

            <div className="usercommentname">
                <h4> <strong> Komaldeep Singh </strong> <br/> </h4>
            </div>
            <div className="usercomments">
                <p>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>
                </p>
            </div>
            <hr/>

            <hr/>
            <img className="Userimagecomment" src ={'client/Images/sonam.jpg'}/>
            <div className="usercommentname">
                <h4> <strong> Sonam Malhotra </strong> <br/> </h4>
            </div>
            <div className="usercomments">
                <p>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>

                </p>
            </div>
            <hr/>

            <hr/>
            <img className="Userimagecomment" src ={'client/Images/sonam1.jpg'}/>
            <div className="usercommentname">
                <h4> <strong> Sonam </strong> <br/> </h4>
            </div>
            <div className="usercomments">
                <p>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>
                    <img src ={'client/Images/star.png'}/>

                </p>
            </div>
            <hr/>

        </div>
        </div>;


        this.setState({
            Currenticon :curr_icon
        });
    }

    Price(){
        var curr_icon = <div> <hr/> <div className="sidebar-bottom">

            <h4> <strong> Price </strong> <br/> </h4>
            <p> 10$</p>

        </div>
        </div>;


        this.setState({
            Currenticon :curr_icon
        });
    }

    Sold(){
        var curr_icon = <div> <hr/> <div className="sidebar-bottom">

            <h4> <strong> Sold </strong> <br/> </h4>
            <p> 5 </p>

        </div>
        </div>;


        this.setState({
            Currenticon :curr_icon
        });
    }

    Support(){

        var curr_icon =  <div> <hr/> <div className="sidebar-bottom">
            <img className="Userimage" src ={'client/Images/deep.jpg'}/>
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

                <button className="submitbutton4"> React </button>
                <button className="submitbutton4"> Html </button>
                <button className="submitbutton4"> CSS </button>
                <button className="submitbutton4"> Javascript </button>
                <button className="submitbutton4"> Jquery </button>
                <button className="submitbutton4"> Firebase </button>
            </div>
        </div>
        </div>;

        this.setState({
            Currenticon :curr_icon
        });

    }

    render(){

        return (
            <div className="sidebar">
                <div className="side-header">
                <button onClick={this.Item.bind(this)} className="submitbutton1"> Item </button>
                <button onClick={this.Comments.bind(this)} className="submitbutton1"> Comments </button>
                <button onClick={this.Support.bind(this)} className="submitbutton1"> Supports </button>
                </div>
                <hr/>

                <div className="rating">
                    <button className="submitbutton2" onClick={this.Rating.bind(this)}> Rating <img src ={'client/Images/star.png'}/> </button>
                    <button className="submitbutton2" onClick={this.Price.bind(this)}> Price  <img src ={'client/Images/euro.png'}/></button>
                    <button className="submitbutton2" onClick={this.Sold.bind(this)}> Number-sold </button>
                    <button className="submitbutton3"> Add To Card</button>
                    <button className="submitbutton3"> Buy & Checkout </button>
                </div>
                    {this.state.Currenticon}
            </div>
        )
    }
}

export default Sidebar ;



