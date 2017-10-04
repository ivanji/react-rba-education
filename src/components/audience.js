import React, { Component } from 'react';
import ResourceList from './resourceList';

class Audience extends Component {

    render() {
        return (
            <div id="content" tabIndex="-1" role="main" className="column-content content-style">
                <h1 className="page-title">{this.props.name}</h1>
                <ResourceList name="Resources" resources={this.props.resources} />
            </div>
        )
    }
}

export default Audience;
