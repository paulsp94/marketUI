import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Details from './Details';
import { PropTypes } from 'react'
import LazyLoad from 'react-lazyload';

class ListTask extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            tasks: AppStore.getAll(),
            deletetasks:[],
            selectall : false,
        };

    }

    onDeletetasks(e){
        this.setState({
            deletetasks: e
        });
    }

    save(){

    }

    delete(){

        var deletespecifictasks = this.state.deletetasks;
        var tasks = this.state.tasks;

        for(var i = 0; i< deletespecifictasks.length;i++) {

            var currenttask = deletespecifictasks[i];

            var index = tasks.indexOf(currenttask);

            if (index > -1) {
                tasks.splice(index, 1);

                this.setState({
                    tasks: tasks
                });

            }
        }
        hashHistory.push('Tasks');

    }

    add(){
        hashHistory.push('/');
    }

    selectall(){
        this.setState({
            selectall: true
        });

    }


    render(){

        var tasks = this.state.tasks;
        var selectall = this.state.selectall;

        //var data = this;
        return (

            <div className="background" >
                <br/>


                <div className="addbar">

                    <br/>
                    <button className="button1"  onClick={this.selectall.bind(this)}>  <LazyLoad height={'100%'} resize={true} ><img className="logo12" src ={'client/Images/selall.gif'}/></LazyLoad> </button>
                    <button className="button1" >  <LazyLoad height={'100%'} resize={true} ><img className="logo12" src ={'client/Images/del.gif'}/></LazyLoad> </button>

                    <button className="button"  onClick={this.delete.bind(this)}>  <LazyLoad height={'100%'} resize={true} ><img className="logo12" src ={'client/Images/deletesel.gif'}/></LazyLoad> </button>
                    <button className="button" onClick={this.add.bind(this)}>   <LazyLoad height={'100%'} resize={true} ><img src ={'client/Images/add.gif'}/></LazyLoad> </button>

                </div>

                <div className="table-all">

                    <div className="table-dark">

                    {
                        tasks.map((detail, i)=> {
                            return < Details item={detail} onFilter ={this.onDeletetasks.bind(this)} select ={selectall}
                                             key={detail}  />
                        })
                    }

                    </div>
                </div>


            </div>

        )
    }
}

export default ListTask;



