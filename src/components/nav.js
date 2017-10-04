import React from 'react'
import {NavLink} from 'react-router-dom';

function Nav() {
    return(
        <div className="column-nav">
            <nav>
                <div className="nav-list">
                    <h2 className="title">In Education</h2>
                    <ul>
                        <li>
                            <NavLink exact activeClassName='active' to="/education/resources/">
                                Resources
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName='active' to="/education/audience/">
                                Audiences
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName='active' to="/education/topics/">
                                Topics
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Nav;