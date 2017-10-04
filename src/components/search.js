import React, {Component} from 'react'

class Search extends Component {

    constructor() {
        super();
        this.state = {
            search: 'Search Resources'
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,30)})
    }

    clearField(event) {
        this.setState({ search: event.target.value = ''})
    }

    render() {
        return(
            <form action="" id="form-resources-search" className="form-header-search nav-large">
                <div className="container">
                    <label htmlFor="form-resources-search" className="hidden">Search for Resources</label>
                    <input type="text" value={this.state.search}
                           onClick={this.clearField.bind(this)}
                           onChange={this.updateSearch.bind(this)}
                           size="13"
                           id="form-resources-search"
                           className="query"
                    />
                    <button type="submit" name="btnG" className="submit">Search</button>
                </div>

            </form>
        )
    }
}

export default Search;