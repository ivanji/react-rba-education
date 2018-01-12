import React from 'react';
import Resource from './Resource';

const ResourcesList = (props) => {
    return(
        <div id="resources-list">
            {
                props.resources.map((resource, index) => {
                    return <Resource filter={props.filter} key={index} {...resource} />
                })
            }
        </div>
    )
};

export default ResourcesList;