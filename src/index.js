import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// External resources
import './styles/App.css';

// App Components
import Nav from './components/nav';
/*import Audience from './components/audience';
import Resources from './components/resources';
import Topics from './components/topics';*/
import ResourceList from './components/resourceList';
import Search from './components/search';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [
            ]
        }
    }

    componentDidMount() {
        var _this = this;

        /*
         We perform a promise-based request after the component mounted successfully
         to initially load all resources contained within JSON file.
         */
        this.serverRequest =
            axios
                .get(__dirname + "./pages.json")
                .then((result => {
                    console.log(result.data.resources);
                    /*
                     Exploring results object:
                     console.log(result.status);
                     console.log(result.statusText);
                     console.log(result.headers);
                     console.log(result.config);
                     */
                    _this.setState({
                        resources: result.data.resources
                    })
                }))
                .catch(error => {
                    console.log(error);
                })
    }

    render() {
        return(
            <BrowserRouter>
                <div className="page-width page-with-nav page-layout">
                    <Search />
                    <Nav />
                    <Route path="/education/resources/" render={()=><ResourceList name="Resources" resources={this.state.resources}/> }/>
                    <Route path="/education/audience/" render={()=><ResourceList name="Audience Resources" resources={this.state.resources} />}/>
                    <Route path="/education/topics/" render={()=><ResourceList name="Topics Resources" resources={this.state.resources} />}/>
                </div>
            </BrowserRouter>
        )
    }
}



ReactDOM.render(
    <App />, document.getElementById('root')
);
