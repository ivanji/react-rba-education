import React from 'react';
import FilterLink from './FilterLink';
const Form = (props) => {
    return(
        <form id="quicksearch" className="no-js-hidden form-quicksearch">
            <div className="container">
                <span className="form-label-col">
                    <label htmlFor="form-header-search-q" className="hidden">Search Educational Resources</label>
                </span>
                <span className="form-field-col">
                    {/*// if the resource catalog was larger there'd be scope to limit search on filtered items.
                    *   Possible idea: TODO: add checkbox to enable search only on filteredItems
                    * */}
                    <input onChange={props.search} type="text" name="search" placeholder="Search for educational resources"/>
                </span>
            </div>

            <ul className="filters">
                <FilterLink filter={props.filter} children={props.audienceList} type="audience" />
            </ul>
            <ul className="filters">
                <FilterLink filter={props.filter} children={props.topicList} type="topic" />
            </ul>

            {/*<select onChange={props.filter}>
                <option value="reset">Filter by Topics</option>
                {props.topicList.length > 0 ?
                        props.topicList.map((topic, index) => {
                            return <option value={topic} key={index}>{topic}</option>
                        }) :
                        <option>No Topics available</option>

                }
            </select>

            <select onChange={props.filterAudience}>
                <option value="reset-audience">Filter by audience</option>
                {
                    props.audienceList.length > 0 ?
                        props.audienceList.map((audience, index) => {
                            return <option value={audience} key={index}>{audience}</option>
                        })
                        : <option>No audience available</option>
                }
            </select>

           */}

            <button onClick={props.reset}>Reset Filters</button>

        </form>
    )
};

export default Form;