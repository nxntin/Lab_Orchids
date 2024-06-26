import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeContext';

const OrchidItem = ({ orchid }) => {
    const { theme } = useContext(ThemeContext);

    const nameStyle = {
        color: theme === 'light' ? 'black' : 'white',
        fontSize: '25px'
    };

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '10px', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={orchid.image} alt={orchid.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2 style={nameStyle}>{orchid.name}</h2>
            <Link to={`/detail/${orchid.id}`}>
                <button style={{ backgroundColor: 'Crimson' }}>Detail</button>
            </Link>
        </div>
    );
};

export default OrchidItem;
