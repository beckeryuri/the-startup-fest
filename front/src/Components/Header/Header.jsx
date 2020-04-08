import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default () => 
    <div className="header-container">
        <Link className="link" to='/'>Startups</Link>
        <Link className="link" to='/ranking'>Ranking</Link>
    </div>