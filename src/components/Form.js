import React from 'react';

const Form = () => {
    return(
        <form>
            <div className="container">
                <label htmlFor="form-header-search-q" className="hidden">Search RBA website</label>
                <input type="text" name="search" placeholder="Search Resources"/>
                <button type="submit" name="btnG" className="submit">Search</button>
            </div>

            <select>
                <option>1</option>
            </select>
        </form>
    )
};

export default Form;