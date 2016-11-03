import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import { PropTypes } from 'react'

class Details extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            tasks: AppStore.getAll(),
            done: false,
            deletetask:[],
        };

    }

    componentWillMount(){

        window.alltasks=[];

    }



    checked(e){

        var taskname = this.props.item;
        if (this.state.done == false) {
            this.setState({
                done: true,
            });

            alltasks.push(
                taskname
            );

            this.setState({
                deletetask: alltasks
            });

            this.props.onFilter(alltasks);

        }
        else {
            this.setState({
                done: false,
            });

            var index = alltasks.indexOf(taskname);

            if (index > -1) {
                alltasks.splice(index, 1);

                this.setState({
                    deletetask: alltasks
                });

                this.props.onFilter(alltasks);

            }
        }

    }



    render(){

        var tasks = this.state.deletetask;

        var selectall = this.props.select;

        if(selectall == 'false'){
            var checked = true
        }
        else {
            var checked = this.state.done;
        }

        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" checked={checked} onChange={this.checked.bind(this)}  />
                        </td>

                        <td>
                            {this.props.item}
                        </td>

                    </tr>

                    </tbody>
                </table>


            </div>

        )
    }
}

export default Details;



