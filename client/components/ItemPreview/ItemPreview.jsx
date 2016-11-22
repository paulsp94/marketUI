import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Itemview from './Itemview.jsx';
import { fetchuserdetails } from '../../action/action.jsx'


class  ItemPreview extends Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };

    }

    componentWillMount(){
        console.log(this.props);
        this.props.fetchuserdetails();
    }




    render(){


        return (
            <div className="background">
                <Header/>
                 <Itemview/>
                 <Sidebar/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchuserdetails}, dispatch);
}

function mapStateToProps(store) {
    return { userdetails: store.userdetails };
}


export default connect(null, mapDispatchToProps)(ItemPreview) ;



