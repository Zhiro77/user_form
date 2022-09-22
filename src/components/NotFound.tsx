import { Link } from "react-router-dom"
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to={'/'}>home</Link>
        </div>
    )
}

export default NotFound