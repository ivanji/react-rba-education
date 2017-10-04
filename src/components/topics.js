import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import Resource from './resource'
class Topics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: [

            ]
        }
    }
    componentDidMount() {
        var _this = this;

        this.serverRequest =
            axios
                .get(__dirname + "./pages.json")
                .then(function(result) {
                        console.warn(result)
                        _this.setState({
                            resources: result.data.resources
                        });

              })
                .catch(function (error) {
                    console.log(error);
                });
    }

    render() {
        return (
            <div id="content" tabIndex="-1" role="main" className="column-content content-style">
                <h1 className="page-title">{this.props.name}</h1>
                <Resource />
            </div>
        )
    }
}

export default Topics;
