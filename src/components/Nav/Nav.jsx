import React from "react"
import "./nav.css"
import {NavLink} from "react-router-dom";

export default class Nav extends React.Component {
    render() {

        const { navs } = this.props
        return (
            <ul>

                { Object.keys(navs).map(nav => {
                            return (
                                <li>
                                    <NavLink to={navs[nav]}> {nav} </NavLink>
                                </li>
                            )
                        })
                }
            </ul>
        )
    }
}