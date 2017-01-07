import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
var MediaQuery = require('react-responsive');

class Tags extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            value: 1,
        };
    }

    searchFilter(event){
        this.props.onUpdateFilter(event.target.value.substr(0,20));
    }

    state = {
    selectfield_value: 'New',
    };

    handleChange = (event, index, selectfield_value) =>
    {
        this.props.sortUpdateFilter(selectfield_value);
        this.setState({
            selectfield_value
        });
    };

    cateGoryFilter(value){
        this.props.cateGoryFilter(value);
    }

    render(){

            const desktopTags = <div className="tags">
            <Flexbox flexDirection="row" style={{height: '45px'}}>

                <Flexbox flexGrow={1}>
                    <FlatButton onClick={this.cateGoryFilter.bind(this,"All Product")} label="All" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
                </Flexbox>

                <Flexbox flexGrow={1} className="searchTags" >
                            <FlatButton onClick={this.cateGoryFilter.bind(this , "Shiny & Web")} label="Shiny&Web" className="searchTags" style={{margin: 3,width: "100%",height:'100%', color:"white"}}/>
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this, "Machine Learning")} label="Machine&nbsp;Learning" className="searchTags" style={{margin: 3,width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                             <FlatButton onClick={this.cateGoryFilter.bind(this,"Big Data")} label="Big&nbsp;Data" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Algorithms")} label="Algorithms" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Graphics")} label="Graphics" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Other")} label="Other" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>

                  <Flexbox flexGrow={1}>
                    <SelectField className={''} 
                        value={this.state.selectfield_value}
                        onChange={this.handleChange.bind(this)}
                        style={{width:'170px', color:'white', marginLeft: '30px',}}
                        labelStyle={{color:'white'}}
                     >
                        <MenuItem primaryText="Sort Product" />
                        <MenuItem value={'Newest'} primaryText="Newest" />
                        <MenuItem value={'Rating'} primaryText="Rating" />
                        <MenuItem value={'Popularity'} primaryText="Popularity" />
                        {/*<MenuItem value={'Price'} primaryText="Price" />*/}
                      </SelectField>
                       <TextField hintText={'Search...'} hintStyle={{color:'white'}} onChange={this.searchFilter.bind(this)} className={'search'} style={{marginLeft:'5px',marginRight:'5px',color:'white',fontWeight:'400',width:'150px'}} inputStyle={{color:'white'}}/>
                   </Flexbox>
             </Flexbox>
            </div>

      const mobileTags = <div className="tags">
            <Flexbox flexDirection="row" style={{height: '45px'}}>
                <Flexbox flexGrow={1}>
                    <FlatButton onClick={this.cateGoryFilter.bind(this,"All Product")} label="All" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
                </Flexbox>
                <Flexbox flexGrow={1} className="searchTags" >
                            <FlatButton onClick={this.cateGoryFilter.bind(this , "Shiny & Web")} label="Shiny&Web" className="searchTags" style={{margin: 3,width: "100%",height:'100%', color:"white"}}/>
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this, "Machine Learning")} label="Machine&nbsp;Learning" className="searchTags" style={{margin: 3,width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                             <FlatButton onClick={this.cateGoryFilter.bind(this,"Big Data")} label="Big&nbsp;Data" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Algorithms")} label="Algorithms" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
              <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Graphics")} label="Graphics" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>
               <Flexbox flexGrow={1}>
                            <FlatButton onClick={this.cateGoryFilter.bind(this,"Other")} label="Other" className="searchTags" style={{margin: 3, width: "100%",height:'45px', color:'white'}}  />
              </Flexbox>

             </Flexbox>
            </div>

        return (
        <div>
              <MediaQuery maxDeviceWidth={1264}>
                     <div>{mobileTags}</div>;
              </MediaQuery>
              <MediaQuery minDeviceWidth={1265}>
                     <div>{desktopTags}</div>;
              </MediaQuery>
           
        </div>
        )
    }
}

export default Tags;