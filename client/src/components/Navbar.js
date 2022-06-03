import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper indigo" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">LinkWork</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/links">Личный кабинет</NavLink></li>
                    <li><NavLink to="/create">Новая ссылка</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти из системы</a></li>
                </ul>
            </div>
        </nav>
    )
}