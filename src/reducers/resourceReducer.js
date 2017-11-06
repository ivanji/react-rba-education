export default function resourceReducer( state = { resources: [], filteredResources: [], topicList: []}, action) {
    switch(action.type) {
        case 'FETCH_RESOURCES_SUCCESS':
            return {
                ...state, resources: action.resources, filteredResources: action.resources
            };
        case 'SEARCH_LIST':
            return {
                ...state, filteredResources: action.filteredResources
            };
        default:
            return state;
    }
};