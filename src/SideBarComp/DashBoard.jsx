import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return(
        <div>
            <h1>Dashboard</h1>
            <Link to= {'/Setting/hgf'}>Dynamic Route</Link>
        </div>
    )
}

export default DashBoard;