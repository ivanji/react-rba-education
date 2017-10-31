export function fetchResources() {
    return function(dispatch) {
        fetch('./education-resources-list.json')
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }
                response.json().then(data => {
                    dispatch(fetchResourcesSuccess(data));
                });
        });
    }
}

export function fetchResourcesSuccess(data) {
    return {
        type: 'FETCH_RESOURCES_SUCCESS',
        resources: data.resources
    }
}