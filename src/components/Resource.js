import React from 'react';
import { Link } from 'react-router-dom';

const Resource = (props) => {
    // TODO: This should be moved outside this component. To a selector or as props
    // Let's create a list of audiences each resource belongs to. To tag each resource.
    let audience = props.audience.map(year => {
            let audienceUrl = '/education/resources/audience/' + year;
            return <li key={year}>
                        <Link onClick={props.filter} className="anchor-action" to={audienceUrl}
                           title="Filter resources only for this audience type">{year}</Link>
                    </li>;
    });

    return (
        <div className="resource col-grid col-sm-3">
            <h3><a href={props.url}>{props.title}</a></h3>
            <a className="anchor-image" href={props.url}>
                <img src={props.thumbnail_url} alt={props.thumbnail_alt} />
            </a>

            <p>{props.description}</p>
            <ul className="links">Audience: {audience}</ul>
        </div>
    )
};

export default Resource;