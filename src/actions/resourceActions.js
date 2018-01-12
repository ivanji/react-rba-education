import {FETCH_RESOURCES_SUCCESS, LOCATION_CHANGE} from '../constants';

const data = require('../education-resources-list');

//<editor-fold desc="Fetch Resources">
export function fetchResources() {
    // Creating a list of resources based on above resource file
    let resources = data.resources, i = 0, k, temp = {}, temp2 = {};
    /*
     Let's build a topics list from the list of available resources to be used
     under the 'Filter By Topics' drop-down
     */

    while (resources[i]) {
        /*
         Based on some performance testing, this was the fastest approach to iterate through all resources.
         (I'm still not 100% confident is true).
         */
        k = 0;
        while (resources[i].topics[k]) {
            if (typeof temp[resources[i].topics[k]] === 'undefined') {
                temp[resources[i].topics[k]] = 1;
            }
            k++;
        }
        i++;
    }

    let topicList = Object.keys(temp).sort(); // Result. => List of Topics.

    /*  Now let's iterate through the same array of objects to generate a list of 'audiences'
     to be used by 'Filter by Audience' drop-down filter */
    /*  Here I'm using a different approach to generate the list.
     The while (imperative) approach is not the best. Reduce is a nicer-to-read (pure) function.
     According to research, reduce (filter, map, etc...) should be as fast as of Jan 2018 on most modern JS engines
     for traversing a massive array
     */
    let arr = [];
    let audienceList = data.resources.reduce((uniqueTopics, item) => {
        return uniqueTopics.concat(item.audience);
    }, []).filter(item => {
        if (arr.indexOf(item) === -1) {
            return arr.push(item);
        }
    }).sort(function(a, b){return b-a});

    return {
        type: 'FETCH_RESOURCES_SUCCESS',
        resources: data.resources, topicList, audienceList
    }
}
//</editor-fold>

//<editor-fold desc="Search">
export function searchResources(value) {
    /* Search functionality: Looks through resource titles and descriptions.
     *  This can be expanded to match other attributes.
     *  Topics and Audiences are filtered independently. See other related actions
     * */
    return function (dispatch, getState) {
        let results = getState().resourceReducer.resources.filter(resource => {
            return (
                resource.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                resource.description.toLowerCase().indexOf(value.toLowerCase()) !== -1
            )
        })
        dispatch(searchResults(results));
    }
}

export function searchResults(results) {
    return {
        type: 'SEARCH_RESULTS',
        filteredResources: results,
        isFiltered: true
    }
}
//</editor-fold>

export function filterResources(value) {
    return function (dispatch, getState) {
        const filterText = value.innerHTML;

        var currentState = function() {
            if ( getState().resourceReducer.isFiltered !== false ) {
                return getState().resourceReducer.filteredResources
            }
            return getState().resourceReducer.resources
        }

        let filterList = currentState().filter(resource => {
             if ( value.href.includes('topic')) { // if Type passed down is 'topic' - let's filter by topic
                 return resource.topics.indexOf(filterText) !== -1
             } else if (value.href.includes('audience')) {
                 return resource.audience.indexOf(filterText)  !== -1
             }
        });
        dispatch(filter(filterList));
    }
    //dispatch(filterByTopics(filterList));

}

export function filter(filterList) {
    return {
        type: 'FILTER',
        filteredResources: filterList,
        isFiltered: true
    }
}

export function resetView() {
    return {
        type: "RESET_VIEW",
        filteredResources: [],
        isFiltered: false
    }
}
