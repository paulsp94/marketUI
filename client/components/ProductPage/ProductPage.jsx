

import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

class  ProductPage extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }


    render(){


        return (
            <div >
                <Header/>
                <Sidebar/>
                <br/>
                <Subheader/>

                <div className="productpage-top">
                    <input type="file" />
                </div>

                <div className="productpage" >
                Lorem ipsum dolor sit amet, oratio melius fabulas ex vix, mel id habemus inimicus postulant. Mei tractatos sapientem vituperatoribus et, nominati contentiones comprehensam quo no, te odio atomorum vel. Est te partiendo abhorreant theophrastus. Ex tempor sensibus forensibus ius, id nulla inermis eum. At congue dicunt melius per, eos ea legere denique.

                His postulant definitionem ei, justo nominavi disputando ea vis. Ne veniam oporteat theophrastus vis, graeci voluptua ex nec. Mel sonet doming no. Eum dicat elitr exerci ad. Ad quo inani dictas gubergren. Diceret vivendo splendide sea ei.

                Semper scaevola his at. Aeque tamquam delicatissimi at has, probo mediocrem cotidieque te mei, consul abhorreant id sit. Pri nostrum mentitum senserit at, nihil liberavisse quo et. Cum te modo sanctus corpora, convenire periculis eum eu.

                    </div>
            </div>
        )
    }
}

export default ProductPage;



