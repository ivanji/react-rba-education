import React from 'react';

const Resource = (props) => {
    return (
        <div className="resource">
            <h2><a href={props.url}>{props.title}</a></h2>
            <a className="anchor-image" href={props.url}>
                <img className="image-person side" src={props.thumbnail_url} alt={props.thumbnail_alt} />
            </a>
            <p>{props.description}</p>
            <p>Explainer: <a href={props.url}>{props.title}</a></p>
            <p className="clear-both">&nbsp;</p>
        </div>
    )
};

export default Resource;