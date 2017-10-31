export default function resourceReducer( state = { resources: [], filteredResources: []}, action) {
    switch(action.type) {
        case 'FETCH_RESOURCES_SUCCESS':
            return {
                ...state, resources: action.resources
            };
        default:
            return state;

    }

};