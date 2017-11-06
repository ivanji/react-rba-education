import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

/* Styles */
import './styles/index.css';
import './styles/rba.css';

/* Internal Components */
import Leftnav from './components/Leftnav';
import ResourcesList from './components/ResourcesList';
import NoResults from './components/NoResults';
import Form from './components/Form';
import * as resourcesActions from './actions/resourceActions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: []
        };
        this.searchResources = this.searchResources.bind(this);
    }

    searchResources(event) {
        event.preventDefault();
        let value = event.target.value;
        this.props.filterActions.searchResources(value);
    }

    render() {
        return(
            <div className="page-width page-with-nav page-layout">
                <Leftnav/>
                <Form search={this.searchResources} />
                {this.props.resources.length > 0 ?
                    <ResourcesList resources={this.props.resources}/> :
                    <NoResults />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        resources: state.resourceReducer.filteredResources,
        topics: state.resourceReducer.topicList
    }

}

function mapDispatchToProps(dispatch) {

    return {
        filterActions: bindActionCreators(resourcesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
