import React from 'react';
import Resource from './resource';

const ResourceList =(props) => {
    return(
        <div id="content" tabIndex="-1" role="main" className="column-content content-style">
            <h1 className="page-title">{props.name}</h1>
            {
                props.resources.map(resource =>
                    <Resource key={resource.id} {...resource} />)
            }
        </div>
    )
};

export default ResourceList;