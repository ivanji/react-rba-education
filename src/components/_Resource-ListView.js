import React from 'react';

const Resource = (props) => {
    let audience = props.audience.map(year => {
        let audienceUrl = '/education/resources/audience/' + year;
        return <li><a href={audienceUrl} title="Filter resources only for this audience type">{year}</a> </li>;
    });


    return (
        <div className="resource list-articles">
            <h2><a href={props.url}>{props.title}</a></h2>
            <a className="anchor-image" href={props.url}>
                <img className="image-person side" src={props.thumbnail_url} alt={props.thumbnail_alt} />
            </a>
            <p>{props.description}</p>
            <p className="explainer">Explainer: <a href={props.url}>{props.title}</a></p>
            <ul className="links">Audience: {audience}</ul>
            <p className="clear-both">&nbsp;</p>
        </div>
    )
};

export default Resource;