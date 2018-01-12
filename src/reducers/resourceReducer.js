export default function resourceReducer( state = { resources: [], filteredResources: [], topicList: [], audienceList: [], isFiltered: false}, action) {
    switch(action.type) {
        case 'FETCH_RESOURCES_SUCCESS':
            return {
                ...state, resources: action.resources, topicList: action.topicList, audienceList: action.audienceList
            };
        case 'SEARCH_RESULTS':
            return {
                ...state, filteredResources: action.filteredResources, isFiltered: true
            };
        case 'FILTER':
            return {
                ...state, filteredResources: action.filteredResources, isFiltered: action.isFiltered
            };
        case 'RESET_VIEW':
            return {
                ...state, filteredResources: action.filteredResources, isFiltered: action.isFiltered
            };
        default:
            return state;
    }
};