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
               <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                        <div className="Product2">
                          <div className="Leftedit">
                             <div className="Productdisplay" style={{width: 250}} >
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

                          </div>

                          <div className="RightView">
                                   <Card style={{width: 500, marginLeft: "25%", marginTop: "5%"}}>
                                    <Card>
                                    <h4 style={{float: "left", marginLeft: 3}}><strong>Packages:</strong> <br/></h4>
                                    <div style={{display:"flex", flexWrap:"wrap", margin: 9}}>
                                    <Chip style={{float: "left", margin: 4}}>Shiny </Chip>
                                    <Chip style={{float: "left", margin: 4}}>ggplot </Chip>
                                    <Chip style={{float: "left", margin: 4}}>dplyr </Chip>
                                    </div>
                                    </Card>


                                    <div style={{flexWrap: 'wrap', margin: 9}}>
                                    <h4><strong>Complexity:</strong></h4>
                                    <p> 4/10 </p>
                                    <h4><strong>Integration Time: </strong></h4>
                                     3 hours
                                    </div>

                                    <Card>
                                    <h4 style={{float: "left", marginLeft: 3}}><strong>  Compatibilty: </strong> <br/></h4>
                                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    <Chip style={{float: "left", margin: 4}}> R / Shiny </Chip>
                                    </div>
                                    </Card>

                                    <div style={{flexWrap:"wrap", margin: 9}}>
                                    <h4 ><strong> Maintenance: </strong> </h4>
                                    <h5> 5 Versions</h5>
                                    <p > Last Updated 20-11-2015 </p>
                                    </div>

                                    <Card>
                                    <h4 style={{float: "left", marginLeft: 3}} ><strong> Tags: </strong> </h4>
                                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    <Chip style={{float: "left", margin: 4}}>Html </Chip>
                                    <Chip style={{float: "left", margin: 4}}>CSS </Chip>
                                    <Chip style={{float: "left", margin: 4}}>Javascript </Chip>
                                    <Chip style={{float: "left", margin: 4}}>Jquery </Chip>
                                    <Chip style={{float: "left", margin: 4}}>Firebase </Chip>
                                    </div>
                                    </Card>
                                </Card>
                         </div>
                </div>
                </Card>
            </MuiThemeProvider>
        )
    }
}

export default Sidebar;

