import { FETCH_RESOURCES_SUCCESS, LOCATION_CHANGE} from '../constants';
//<editor-fold desc="Fetch Resources">
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

    /*let arrays = data.resources.reduce((result, item) => {
        //var topics = item.topics.toString();
        var topics = item.topics.toString();
        console.log(topics);
        if (!result.includes(topics)) {
            return result.concat(topics);
        } else {
            console.log("Topics found -- skipping...");
        }
        console.log(topics);
        return result;
    }, []);
    console.log(arrays);
    console.log("_------------------_");*/


    console.time("Marat");
    console.log("Marats data: " + data.resources);
    let resources = data.resources;
    console.log(resources);

    var i = 0, k, temp = {};

    while(resources[i]) {
        k = 0;
        while(resources[i].topics[k]) {
            if(typeof temp[resources[i].topics[k]] === 'undefined' ) {
                temp[resources[i].topics[k]] = 1;
            }
            k++;
        }
        i++;
    }

    var result = Object.keys(temp);
    console.log(result);
    console.timeEnd("Marat");



    console.time("Ivan");
    console.log("Ivans data: " +data.resources);
    let topicsList = data.resources.reduce((uniqueTopics, item) => {
        let all = uniqueTopics.concat(item.topics);
        let unique = [];

        return all.filter(item => {
            //if (unique.includes(item)) { // Includes replaced by indexOf since it's not supported by IE
            if (unique.indexOf(item) === -1) {
                return unique.push(item);
            }
        });

    },[]);
    console.log(topicsList);
    console.timeEnd("Ivan");

    console.time("Thiru");
    var arr = [];
    for(var i=0; i<resources.length;i++){
        resources[i].topics.filter(function (e){
            if(arr.indexOf(e)=== -1)
                arr.push(e);
        });
    }
    console.log(arr);
    console.timeEnd("Thiru");

    return {
        type: 'FETCH_RESOURCES_SUCCESS',
        resources: data.resources
    }
}
//</editor-fold>

//<editor-fold desc="Search">
export function searchResources(value) {
    console.log(value);
    return function(dispatch, getState) {
        let results = getState().resourceReducer.resources.filter(resource => {
            return (
                resource.title.toLowerCase().indexOf(value.toLowerCase()) !==-1 ||
                resource.description.toLowerCase().indexOf(value.toLowerCase()) !== -1
                // resource.topics[0].toLowerCase().indexOf(value.toLowerCase()) !== -1
            )
        });
        dispatch(searchList(results));
    }
}

export function searchList(results) {
    return {
        type: 'SEARCH_LIST',
        filteredResources: results
    }
}
//</editor-fold>

