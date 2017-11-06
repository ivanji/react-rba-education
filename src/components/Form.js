import React from 'react';

const Form = (props) => {
    return(
        <form id="quicksearch" className="no-js-hidden form-quicksearch">
            <div className="container">
                <span className="form-label-col">
                    <label htmlFor="form-header-search-q" className="hidden">Search Educational Resources</label>
                </span>
                <span className="form-field-col">
                    <input onChange={props.search} type="text" name="search" placeholder="Search for educational resources"/>
                </span>
            </div>

            <select>
                {

                }
            </select>
        </form>
    )
};

export default Form;