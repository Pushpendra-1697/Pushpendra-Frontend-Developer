import React from 'react'
import { Navigate } from 'react-router-dom'

const SpaceX = () => {

    if (localStorage.getItem('token') === null) {
        return <Navigate to={'/login'} />
    };
    return (
        <div>SpaceX</div>
    )
}

export default SpaceX