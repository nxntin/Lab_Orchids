import React, { useContext, useEffect, useState } from 'react';
import OrchidItem from '../OrchidItem';
import { ThemeContext } from '../../theme/ThemeContext';
import { fetchOrchids } from '../../services/api';
import './Orchids.scss';

const Orchids = () => {
    const { theme } = useContext(ThemeContext);
    const [orchidsData, setOrchidsData] = useState([]);

    useEffect(() => {
        fetchOrchids().then(response => {
            console.log('Fetched orchids:', response.data); // Thêm console log
            setOrchidsData(response.data);
        }).catch(error => {
            console.error('Error fetching orchids:', error);
        });
    }, []);

    return (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <h1 className='list-of-orchids'>List of Orchids</h1>
            <div className='item'>
                {orchidsData.map((orchid) => (
                    <OrchidItem key={orchid.id} orchid={orchid} />
                ))}
            </div>
        </div>
    );
};

export default Orchids;
