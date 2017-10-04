import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
//import Search from './search'

import ResourceList from './resourceList';
import '../styles/App.css'

class Resources extends Component {



  render() {
    return (
        <div id="content" tabIndex="-1" role="main" className="column-content content-style">
            <h1 className="page-title">{this.props.name}</h1>
            <ResourceList name="Resources" resources={this.state.resources} />
        </div>
    )
  }
}

export default Resources;
