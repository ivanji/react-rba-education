import React from 'react';
import Resource from './Resource';

const ResourcesList = (props) => {
    return(
            <div id="content" className="column-content content-style">
                <section>
                    <h1 className="page-title">
                        Education
                    </h1>

                    {
                        props.resources.map((resource, index) => {
                            return <Resource key={index} {...resource} />
                        })
                    }
                </section>

            </div>

    )
};

export default ResourcesList;