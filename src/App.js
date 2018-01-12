import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

/* Styles */
import './styles/index.css';
import './styles/rba.css';

/* Internal Components */
import Leftnav from './components/Leftnav';
import Intro from './components/resourceIntro';
import ResourcesList from './components/ResourcesList';
import NoResults from './components/NoResults';
import Form from './components/Form';
import * as resourcesActions from './actions/resourceActions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.searchResources = this.searchResources.bind(this);
        this.filter = this.filter.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }

    searchResources(event) {
        event.preventDefault();
        let value = event.target.value;
        this.props.filterActions.searchResources(value); //dispatch action 'searchResources'
    }

    filter(event) {
        event.preventDefault();
        let filterValue = event.target;
        this.props.filterActions.filterResources(filterValue);
    }

    resetFilters(event) {
        event.preventDefault();
        this.props.filterActions.resetView();
    }

    render() {
        return(
            <div id="content" tabIndex="-1" role="main" className="page-width page-layout column-content content-style">
                <Intro />
                <Form search={this.searchResources}
                      topicList={this.props.topicList}
                      audienceList={this.props.audienceList}
                      //filter={this.filterByTopic} // For drop-down
                      //*filterAudience={this.filterByAudience} // for Drop-down*/
                      reset={this.resetFilters}
                      filter={this.filter}
                />
                { this.props.filteredResources.length > 0 ?
                    <ResourcesList filter={this.filter} resources={this.props.filteredResources}/> :
                    <ResourcesList filter={this.filter} resources={this.props.resources}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        resources: state.resourceReducer.resources,
        filteredResources: state.resourceReducer.filteredResources,
        topicList: state.resourceReducer.topicList,
        audienceList: state.resourceReducer.audienceList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(resourcesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
