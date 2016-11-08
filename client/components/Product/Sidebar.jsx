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
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';
import GeneralProfile from './GeneralProfile.jsx';
import { WithContext as ReactTags } from 'react-tag-input';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import ChipInput from 'material-ui-chip-input';
import TagsInput from 'react-tags-input';

class  Sidebar extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            expanded: true,
            tags: [],
            tags1: [],
            suggestions: [],
            timeest: '',
            diff: '',
            chips:[],
        };
    }

    handleDelete(i) {
        console.log(i);
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleDelete1(i) {
        let tags = this.state.tags1;
        tags.splice(i, 1);
        this.setState({tags1: tags});
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleAddition1(tag) {
        let tags1 = this.state.tags1;
        tags1.push({
            id: tags1.length + 1,
            text: tag
        });
        this.setState({tags1: tags1});
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    handleDrag1(tag, currPos, newPos) {
        let tags = this.state.tags1;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags1: tags });
    }

    DiffiCulity(){
        var difficulty = this.diff.value;
        this.setState({
            diff: difficulty
        });
    }

    TimeEstimation(){
        var timeest = this.timeest.value;
        this.setState({
            timeest: timeest
        });
    }

    handleRequestAdd(chip) {
        console.log('it comes here');
        const newChips = chip.split(',').filter((c) => c.trim().length > 0)
        this.setState({
            chips: [...this.state.chips, ...newChips]
        })
        console.log(this.state.chips);
    }

    handleRequestDelete(deletedChip) {
        if (deletedChip !== 'js') {
            this.setState({
                chips: this.state.chips.filter((c) => c !== deletedChip)
            })
        } else {
            alert('Why would you delete JS?')
        }
    }

    _onChange(tags) {
        this.setState({tags});

    }

    handleKeyPress(){
            alert('Enter clicked!!!');

    }


    render(){

        console.log(this.state.tags);
        let style = {
            width:"100px",
        };

        let tags = this.state.tags;
        let tags1 = this.state.tags1;

        let suggestions = this.state.suggestions;
        let placeholder = "Add Language Tags";
        let placeholder1 = "Add Package Tags";

        return (
            <MuiThemeProvider>
                <div className="background">
                    <div className="container">

                        <Card style= {{backgroundColor: "#FFFFFF", paddingBottom: "1%"}}>
                        <div className="Productdisplay" >
                            <CardText>
                                <div className="productdisplayleft1">
                                    <input name="diff" ref={(a) => this.diff = a} type="text" className="inputfield-signup2" placeholder="Difficulty" onChange={this.DiffiCulity.bind(this)}/><br/><br/>

                                    <ReactTags
                                        handleDelete={this.handleDelete.bind(this)}
                                        handleAddition={this.handleAddition.bind(this)}
                                        placeholder={placeholder}
                                        tags={tags}
                                    />
                                    <br/>

                                    <input type="text" onChange ={this.handleKeyPress.bind(this)} />

                                    <ReactTags
                                        handleDelete={this.handleDelete1.bind(this)}
                                        handleAddition={this.handleAddition1.bind(this)}
                                        placeholder={placeholder1}
                                    />

                                    <ChipInput
                                        onRequestAdd={this.handleRequestAdd.bind(this)}
                                        onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip).bind(this)}
                                        fullWidth
                                    />

                                    <TagsInput
                                        onChange={this._onChange.bind(this)}
                                        value={this.state.tags}
                                        className="inputfield-signup2"
                                    />

                                </div>
                                <div className="productdisplayright1">

                                    <input name="timeest" ref={(c) => this.timeest = c} type="text" className="inputfield-signup2" placeholder="Time-Estimation" onChange={this.TimeEstimation.bind(this)}/><br/><br/>

                                    {
                                        tags.map((detail)=> {
                                            return <Chip item={detail} style={{float: "left", margin: 2}}  onTouchTap = {this.handleDelete.bind(this)}>
                                                {detail.text}
                                            </Chip>
                                        })
                                    }

                                    <br/> <br/> <br/>
                                    {
                                        tags1.map((detail)=> {
                                            return <Chip item={detail} style={{float: "left", margin: 2}} onRequestDelete={this.handleDelete1.bind(this)}>
                                                {detail.text}
                                            </Chip>
                                        })
                                    }


                                </div>
                            </CardText>
                        </div>
                        </Card>
                    </div>
                    <div className="sidebar">
                        <Tabs>
                            <Tab label="header" >
                                <Card expanded={this.state.expanded}>

                                    <CardText>
                                        <strong> Language Tags </strong>
                                        <div className="usertags">
                                            {
                                                tags.map((detail)=> {
                                                    return <Chip item={detail} style={{float: "left", margin: 2}} onRequestDelete={this.handleDelete.bind(this)}>
                                                        {detail.text}
                                                    </Chip>
                                                })
                                            }
                                        </div>

                                        <br/><br/>
                                        <hr/>

                                        <strong> Package Tags </strong>
                                        <div className="usertags">
                                            {
                                                tags1.map((detail)=> {
                                                    return <Chip item={detail} style={{float: "left", margin: 2}} onRequestDelete={this.handleDelete1.bind(this)}>
                                                        {detail.text}
                                                    </Chip>
                                                })
                                            }
                                        </div>
                                        <br/><br/>
                                        <hr/>
                                        <strong> Estimation Time </strong>
                                        <div className="usertags">

                                            {this.state.timeest}

                                        </div>
                                        <br/><br/>
                                        <hr/>

                                        <strong>  Difficulity </strong>
                                        <div className="usertags">
                                            {this.state.diff}
                                        </div>
                                        <br/><br/>
                                        <hr/>

                                    </CardText>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Sidebar;

