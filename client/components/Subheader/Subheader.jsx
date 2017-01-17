import React, {Component} from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import {hashHistory} from 'react-router';

class Subheader extends React.Component {

  constructor(props) {

    super(props);
    this.state = {};

  }

  render() {

    return (

      <div className="sub-header">
        <Link to="/">
          <button className="button1">
            Product page
          </button>
        </Link>
        <Link to="ProductPage">
          <button className="button1">
            Product Content
          </button>
        </Link>
        <Link to="ProductOptions">
          <button className="button1">
            Product Options
          </button>
        </Link>
      </div>

    )
  }
}

export default Subheader;
